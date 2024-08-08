package git

import (
	"github.com/cuigh/auxo/app/container"
	"github.com/cuigh/auxo/log"
	"github.com/xanzy/go-gitlab"
	deployConfig "go_deploy/config"
	"sync"
)

type Gitlab struct {
	c      *gitlab.Client
	locker sync.Mutex
	logger log.Logger
}

func NewGit() *Gitlab {
	d := &Gitlab{
		logger: log.Get("gitlab"),
	}
	return d
}

func (g *Gitlab) client() (c *gitlab.Client, err error) {
	if g.c == nil {
		g.locker.Lock()
		defer g.locker.Unlock()

		if g.c == nil {
			var opt = make([]gitlab.ClientOptionFunc, 0)
			g.c, err = gitlab.NewClient(deployConfig.DeployConfig.Git.Token, opt...)
			if err != nil {
				return
			}
		}
	}
	return g.c, nil
}

func init() {
	container.Put(NewGit)
}
