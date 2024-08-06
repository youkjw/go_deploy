package biz

import (
	"context"

	"github.com/cuigh/auxo/data"
	"github.com/cuigh/auxo/net/web"
	"github.com/docker/docker/api/types/swarm"
	"go_deploy/docker"
)

type ConfigBiz interface {
	Search(ctx context.Context, name string, pageIndex, pageSize int) (configs []*Config, total int, err error)
	Find(ctx context.Context, id string) (config *Config, raw string, err error)
	Delete(ctx context.Context, id, name string, user web.User) (err error)
	Create(ctx context.Context, c *Config, user web.User) (err error)
	Update(ctx context.Context, c *Config, user web.User) (err error)
}

func NewConfig(d *docker.Docker, eb EventBiz) ConfigBiz {
	return &configBiz{d: d, eb: eb}
}

type configBiz struct {
	d  *docker.Docker
	eb EventBiz
}

func (b *configBiz) Find(ctx context.Context, id string) (config *Config, raw string, err error) {
	var (
		c swarm.Config
		r []byte
	)
	c, r, err = b.d.ConfigInspect(ctx, id)
	if err == nil {
		raw, err = indentJSON(r)
	}
	if err == nil {
		config = newConfig(&c)
	}
	return
}

func (b *configBiz) Search(ctx context.Context, name string, pageIndex, pageSize int) ([]*Config, int, error) {
	list, total, err := b.d.ConfigList(ctx, name, pageIndex, pageSize)
	if err != nil {
		return nil, 0, err
	}

	configs := make([]*Config, len(list))
	for i, n := range list {
		configs[i] = newConfig(&n)
	}
	return configs, total, nil
}

func (b *configBiz) Delete(ctx context.Context, id, name string, user web.User) (err error) {
	err = b.d.ConfigRemove(ctx, id)
	if err == nil {
		b.eb.CreateConfig(EventActionDelete, id, name, user)
	}
	return
}

func (b *configBiz) Create(ctx context.Context, c *Config, user web.User) (err error) {
	spec := swarm.ConfigSpec{
		Data: []byte(c.Data),
	}
	spec.Name = c.Name
	spec.Labels = toMap(c.Labels)
	if c.Templating.Name != "none" {
		spec.Templating = &swarm.Driver{
			Name:    c.Templating.Name,
			Options: toMap(c.Templating.Options),
		}
	}

	var id string
	id, err = b.d.ConfigCreate(ctx, &spec)
	if err == nil {
		b.eb.CreateConfig(EventActionCreate, id, c.Name, user)
	}
	return
}

func (b *configBiz) Update(ctx context.Context, c *Config, user web.User) (err error) {
	spec := &swarm.ConfigSpec{
		Data: []byte(c.Data),
	}
	spec.Name = c.Name
	spec.Labels = toMap(c.Labels)
	if c.Templating.Name != "" {
		spec.Templating = &swarm.Driver{
			Name:    c.Templating.Name,
			Options: toMap(c.Templating.Options),
		}
	}
	err = b.d.ConfigUpdate(ctx, c.ID, c.Version, spec)
	if err == nil {
		b.eb.CreateConfig(EventActionUpdate, c.ID, c.Name, user)
	}
	return
}

type Config struct {
	ID         string       `json:"id"`
	Name       string       `json:"name,omitempty"`
	Version    uint64       `json:"version"`
	Data       string       `json:"data"`
	Labels     data.Options `json:"labels,omitempty"`
	Templating Driver       `json:"templating"`
	CreatedAt  string       `json:"createdAt"`
	UpdatedAt  string       `json:"updatedAt"`
}

type Driver struct {
	Name    string       `json:"name"`
	Options data.Options `json:"options,omitempty"`
}

func newConfig(c *swarm.Config) *Config {
	config := &Config{
		ID:        c.ID,
		Name:      c.Spec.Name,
		Version:   c.Version.Index,
		Data:      string(c.Spec.Data),
		Labels:    mapToOptions(c.Spec.Labels),
		CreatedAt: formatTime(c.CreatedAt),
		UpdatedAt: formatTime(c.UpdatedAt),
	}
	if c.Spec.Templating != nil {
		config.Templating.Name = c.Spec.Templating.Name
		config.Templating.Options = mapToOptions(c.Spec.Templating.Options)
	}
	return config
}
