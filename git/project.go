package git

import (
	"context"
	"github.com/xanzy/go-gitlab"
)

func (g *Gitlab) FindProject(ctx context.Context, pId int64) (*gitlab.Project, *gitlab.Response, error) {
	var c *gitlab.Client
	c, err := g.client()
	if err != nil {
		return nil, nil, err
	}

	return c.Projects.GetProject(int(pId), nil, gitlab.WithContext(ctx))
}

func (g *Gitlab) ProjectList(ctx context.Context, page int, size int, name string) ([]*gitlab.Project, *gitlab.Response, error) {
	var c *gitlab.Client
	c, err := g.client()
	if err != nil {
		return nil, nil, err
	}

	var opt = &gitlab.ListProjectsOptions{
		ListOptions: gitlab.ListOptions{
			PerPage: page * size,
		},
	}
	if len(name) > 0 {
		opt.Search = &name
	}

	return c.Projects.ListProjects(opt, gitlab.WithContext(ctx))
}
