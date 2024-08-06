package utils

import (
	"os"
	"path"
)

func StoreFile(fullFile string, fileContent []byte) (f *os.File, err error) {
	dirPath, fileName := path.Split(fullFile)
	if _, dirExistErr := os.Stat(dirPath); os.IsNotExist(dirExistErr) {
		if err = os.MkdirAll(path.Clean(dirPath), os.ModePerm); err != nil {
			return nil, err
		}
	}

	dockerFile := path.Join(dirPath, path.Base(fileName))
	f, err = os.OpenFile(dockerFile, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, os.FileMode(0600))
	if err != nil {
		return nil, err
	}
	if _, err = f.Write(fileContent); err != nil {
		return nil, err
	}

	return
}
