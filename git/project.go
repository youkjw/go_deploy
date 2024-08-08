package git

import (
	"context"
	"github.com/xanzy/go-gitlab"
)

func (g *Gitlab) ProjectList(ctx context.Context, name string) ([]*gitlab.Project, *gitlab.Response, error) {
	var c *gitlab.Client
	c, err := g.client()
	if err != nil {
		return nil, nil, err
	}

	var opt = &gitlab.ListProjectsOptions{}
	if len(name) > 0 {
		opt.Search = &name
	}

	return c.Projects.ListProjects(opt, gitlab.WithContext(ctx))
}
