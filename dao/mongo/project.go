package mongo

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go_deploy/dao"
)

const Project = "project"

const (
	ProjectStatusActive = "active"
)

func (d *Dao) ProjectSearch(ctx context.Context, args *dao.ProjectSearchArgs) (projects []*dao.Project, count int, err error) {
	filter := bson.M{"deleted": false}
	if args.Name != "" {
		filter["name"] = args.Name
	}
	opts := searchOptions{filter: filter, pageIndex: args.PageIndex, pageSize: args.PageSize}
	projects = []*dao.Project{}
	count, err = d.search(ctx, Project, opts, &projects)
	return
}

func (d *Dao) ProjectGet(ctx context.Context, id string) (project *dao.Project, err error) {
	project = &dao.Project{}
	found, err := d.find(ctx, Project, id, project)
	if !found {
		return nil, err
	}
	return
}

func (d *Dao) ProjectCreate(ctx context.Context, row *dao.Project) (err error) {
	return d.create(ctx, Project, row)
}

func (d *Dao) ProjectUpdate(ctx context.Context, project *dao.Project) (err error) {
	update := bson.M{
		"$set": bson.M{
			"name":                project.Name,
			"desc":                project.Desc,
			"depository_id":       project.DepositoryId,
			"dockerfile":          project.DockerFile,
			"file_config":         project.FileConfig,
			"compose_yml":         project.ComposeYml,
			"updated_at":          project.UpdatedAt,
			"updated_by":          project.UpdatedBy,
			"depository_ssh_url":  project.DepositorySshUrl,
			"depository_http_url": project.DepositoryHttpUrl,
		},
	}
	return d.update(ctx, Project, project.ID, update)
}

func (d *Dao) ProjectDelete(ctx context.Context, id string) (err error) {
	update := bson.M{
		"$set": bson.M{
			"deleted": true,
		},
	}
	return d.update(ctx, Project, id, update)
}
