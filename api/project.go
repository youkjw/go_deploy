package api

import (
	"context"
	"github.com/cuigh/auxo/data"
	"github.com/cuigh/auxo/errors"
	"github.com/cuigh/auxo/net/web"
	"go_deploy/biz"
	"go_deploy/dao"
	"go_deploy/misc"
	"strconv"
)

type ProjectHandler struct {
	Search           web.HandlerFunc `path:"/search" auth:"project.view" desc:"search configs"`
	Find             web.HandlerFunc `path:"/find" auth:"project.view" desc:"find config by name"`
	Delete           web.HandlerFunc `path:"/delete" method:"post" auth:"project.delete" desc:"delete project"`
	Save             web.HandlerFunc `path:"/save" method:"post" auth:"project.edit" desc:"create or update project"`
	Deploy           web.HandlerFunc `path:"/deploy" method:"post" auth:"project.deploy" desc:"deploy project"`
	Branches         web.HandlerFunc `path:"/branches" auth:"project.view" desc:"find project branches list"`
	SearchDepository web.HandlerFunc `path:"/search_depository" auth:"project.edit" desc:"find project depositorys list"`
}

func NewProject(b biz.ProjectBiz) *ProjectHandler {
	return &ProjectHandler{
		Search:           projectSearch(b),
		Find:             projectFind(b),
		Delete:           projectDelete(b),
		Save:             projectSave(b),
		Deploy:           projectDeploy(b),
		Branches:         projectBranches(b),
		SearchDepository: projectDepositoryList(b),
	}
}

func projectSearch(b biz.ProjectBiz) web.HandlerFunc {
	type Args struct {
		Name      string `json:"name" bind:"name"`
		PageIndex int    `json:"pageIndex" bind:"pageIndex"`
		PageSize  int    `json:"pageSize" bind:"pageSize"`
	}

	return func(c web.Context) error {
		args := &Args{}
		err := c.Bind(args)
		if err != nil {
			return err
		}

		ctx, cancel := misc.Context(defaultTimeout)
		defer cancel()

		users, total, err := b.Search(ctx, args.Name, args.PageIndex, args.PageSize)
		if err != nil {
			return err
		}
		return success(c, data.Map{"items": users, "total": total})
	}
}

func projectFind(b biz.ProjectBiz) web.HandlerFunc {
	return func(c web.Context) error {
		ctx, cancel := misc.Context(defaultTimeout)
		defer cancel()

		id := c.Query("id")
		project, err := b.Find(ctx, id)
		if err != nil {
			return err
		}
		return success(c, data.Map{"item": project})
	}
}

func projectDelete(b biz.ProjectBiz) web.HandlerFunc {
	type Args struct {
		ID   string `json:"id"`
		Name string `json:"name"`
	}
	return func(c web.Context) (err error) {
		args := &Args{}
		if err = c.Bind(args); err == nil {
			ctx, cancel := misc.Context(defaultTimeout)
			defer cancel()

			err = b.Delete(ctx, args.ID, args.Name, c.User())
		}
		return ajax(c, err)
	}
}

func projectSave(b biz.ProjectBiz) web.HandlerFunc {
	return func(c web.Context) error {
		project := &dao.Project{}
		err := c.Bind(project, true)
		if err == nil {
			ctx, cancel := misc.Context(defaultTimeout)
			defer cancel()

			if project.ID == "" {
				err = b.Create(ctx, project, c.User())
			} else {
				err = b.Update(ctx, project, c.User())
			}
		}
		return ajax(c, err)
	}
}

func projectDeploy(b biz.ProjectBiz) web.HandlerFunc {
	return func(c web.Context) error {
		type Args struct {
			Id string `json:"id" bind:"id"`
		}

		ctx, cancel := context.WithCancel(context.Background())
		defer cancel()

		var args = &Args{}
		err := c.Bind(&args)
		if err != nil {
			return err
		}

		project, err := b.Find(ctx, args.Id)
		if err != nil {
			return err
		}

		if project == nil {
			return errors.New("project info not found")
		}

		// 构建项目env配置文件
		env, err := b.DeployBuildEnv(ctx, project, c.User())
		if err != nil {
			return err
		}
		defer env.Clear()

		return nil
	}
}

func projectDepositoryList(b biz.ProjectBiz) web.HandlerFunc {
	return func(c web.Context) error {
		ctx, cancel := misc.Context(defaultTimeout)
		defer cancel()

		name := c.Query("name")
		page := c.Query("page")
		size := c.Query("size")

		p, _ := strconv.ParseInt(page, 10, 64)
		if p <= 0 {
			p = 1
		}
		pSize, _ := strconv.ParseInt(size, 10, 64)
		if p <= 0 {
			p = 20
		}

		lists, err := b.SearchDepository(ctx, int(p), int(pSize), name)
		if err != nil {
			return err
		}
		return success(c, data.Map{"items": lists})
	}
}

func projectBranches(b biz.ProjectBiz) web.HandlerFunc {
	return func(c web.Context) error {
		return nil
	}
}
