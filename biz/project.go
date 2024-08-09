package biz

import (
	"context"
	"github.com/cuigh/auxo/errors"
	"github.com/cuigh/auxo/log"
	"github.com/cuigh/auxo/net/web"
	deployConfig "go_deploy/config"
	"go_deploy/dao"
	"go_deploy/dao/mongo"
	"go_deploy/docker"
	"go_deploy/git"
	"go_deploy/utils"
	"os"
	"path"
)

type ProjectBiz interface {
	Search(ctx context.Context, name string, pageIndex, pageSize int) (projects []*dao.Project, total int, err error)
	Find(ctx context.Context, id string) (project *dao.Project, err error)
	Delete(ctx context.Context, id, name string, user web.User) (err error)
	Create(ctx context.Context, project *dao.Project, user web.User) (err error)
	Update(ctx context.Context, project *dao.Project, user web.User) (err error)
	SearchDepository(ctx context.Context, page int, size int, name string) (projects []*dao.Depository, err error)
	DeployBuildEnv(ctx context.Context, project *dao.Project, user web.User) (env *ProjectDeployEnv, err error)
}

func NewProject(n *docker.Docker, g *git.Gitlab, d dao.Interface, eb EventBiz) ProjectBiz {
	return &projectBiz{n: n, d: d, g: g, eb: eb}
}

type projectBiz struct {
	n  *docker.Docker
	g  *git.Gitlab
	d  dao.Interface
	eb EventBiz
}

func (b *projectBiz) Find(ctx context.Context, id string) (project *dao.Project, err error) {
	return b.d.ProjectGet(ctx, id)
}

func (b *projectBiz) Search(ctx context.Context, name string, pageIndex, pageSize int) ([]*dao.Project, int, error) {
	var args = &dao.ProjectSearchArgs{
		Name:      name,
		PageIndex: pageIndex,
		PageSize:  pageSize,
	}

	list, total, err := b.d.ProjectSearch(ctx, args)
	if err != nil {
		return nil, 0, err
	}

	return list, total, nil
}

func (b *projectBiz) Delete(ctx context.Context, id, name string, user web.User) (err error) {
	err = b.d.ProjectDelete(ctx, id)
	if err == nil {
		b.eb.CreateProject(EventActionDelete, id, name, user)
	}
	return
}

func (b *projectBiz) Create(ctx context.Context, project *dao.Project, user web.User) (err error) {
	project.ID = createId()
	project.CreatedAt = now()
	project.CreatedBy = newOperator(user)
	project.UpdatedAt = project.CreatedAt
	project.UpdatedBy = project.CreatedBy
	project.Status = mongo.ProjectStatusActive
	err = b.d.ProjectCreate(ctx, project)
	if err == nil {
		b.eb.CreateConfig(EventActionCreate, project.ID, project.Name, user)
	}
	return
}

func (b *projectBiz) Update(ctx context.Context, project *dao.Project, user web.User) (err error) {
	r := &dao.Project{
		ID:           project.ID,
		Name:         project.Name,
		Desc:         project.Desc,
		DepositoryId: project.DepositoryId,
		DockerFile:   project.DockerFile,
		ComposeYml:   project.ComposeYml,
		FileConfig:   project.FileConfig,
		UpdatedAt:    now(),
		UpdatedBy:    newOperator(user),
	}
	err = b.d.ProjectUpdate(ctx, r)
	if err == nil {
		go func() {
			b.eb.CreateProject(EventActionUpdate, project.ID, project.Name, user)
		}()
	}
	return
}

func (b *projectBiz) SearchDepository(ctx context.Context, page int, size int, name string) (items []*dao.Depository, err error) {
	items = make([]*dao.Depository, 0)

	gitProjectList, _, err := b.g.ProjectList(ctx, page, size, name)
	if err != nil {
		return items, err
	}

	for _, gitProject := range gitProjectList {
		items = append(items, &dao.Depository{
			DepositoryId: int64(gitProject.ID),
			Name:         gitProject.Name,
		})
	}

	return items, nil
}

func (b *projectBiz) DeployBuildEnv(ctx context.Context, project *dao.Project, user web.User) (*ProjectDeployEnv, error) {
	var (
		tmpPath = deployConfig.DeployConfig.Deploy.TmpPath
		env     = NewProjectDeployEnv(path.Join(tmpPath, project.ID))
	)

	if len(project.DockerFile) == 0 ||
		len(project.ComposeYml) == 0 {
		return env, errors.New("project docker file config is empty")
	}

	// Dockerfile
	file, err := utils.StoreFile(path.Join(env.EnvPath, "Dockerfile"), []byte(project.DockerFile))
	if err != nil {
		return env, err
	}
	env.DockerFile = file

	// docker-compose.yml
	file, err = utils.StoreFile(path.Join(env.EnvPath, "docker-compose.yml"), []byte(project.ComposeYml))
	if err != nil {
		return env, err
	}
	env.DockerComposeFile = file

	// file config
	for _, conf := range project.FileConfig {
		if len(conf.Name) > 0 && len(conf.Value) > 0 {
			file, err = utils.StoreFile(path.Join(env.EnvPath, conf.Name), []byte(conf.Value))
			if err != nil {
				return env, err
			}
			env.ExtFile[conf.Name] = file
		}
	}

	return env, nil
}

type ProjectDeployEnv struct {
	EnvPath string
	logger  log.Logger

	DockerFile        *os.File
	DockerComposeFile *os.File
	ExtFile           map[string]*os.File
}

func NewProjectDeployEnv(envPath string) *ProjectDeployEnv {
	return &ProjectDeployEnv{
		EnvPath: envPath,
		logger:  log.Get("project_deploy_env"),
		ExtFile: make(map[string]*os.File),
	}
}

func (env *ProjectDeployEnv) Clear() (err error) {
	err = os.RemoveAll(env.EnvPath)
	if err != nil {
		env.logger.Errorf("failed to remove file or filepath [%s]:[%s] ", env.EnvPath, err)
	}
	return err
}
