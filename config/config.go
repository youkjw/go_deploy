package config

import (
	"github.com/cuigh/auxo/config"
	"github.com/cuigh/auxo/errors"
)

var DeployConfig = &deployConfig{}

type loadConfig func() (err error)

type deployConfig struct {
	Deploy *Deploy
}

type Deploy struct {
	TmpPath string `json:"tmp_path" yaml:"tmp_path"`
}

func LoadConfig() (err error) {
	for _, fn := range []loadConfig{
		loadDeploy(),
	} {
		if err = fn(); err != nil {
			return
		}
	}
	return
}

func loadDeploy() loadConfig {
	return func() (err error) {
		deploy := &Deploy{}
		err = config.UnmarshalOption("deploy", &deploy)
		if err != nil {
			err = errors.Wrap(err, "failed to load deploy")
		}
		DeployConfig.Deploy = deploy
		return
	}

}
