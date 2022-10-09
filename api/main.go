package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

type Path int8

const (
	Undefined Path = iota
	Projects
	Jobs
	Featured
)

func getFiles(dirname string) {
	files, err := ioutil.ReadDir(dirname)
	if err != nil {
		log.Fatal(err)
	}

	for _, f := range files {
		fmt.Println(f.Name())
	}
}

func createJSON(c *gin.Context) {
	jsonFile, err := os.Open("./projects/first.json")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Successfully Opened users.json")
	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)

	var result map[string]interface{}
	err1 := json.Unmarshal([]byte(byteValue), &result)
	if err1 != nil {
		fmt.Println(err)
	}

	c.JSON(http.StatusOK, result)
}

func main() {
	router := gin.Default()

	router.Use(cors.Default())
	router.SetTrustedProxies(nil)

	router.GET("/api/v2/projects", func(c *gin.Context) {
		createJSON(c)
	})

	router.GET("/api/v2/jobs", func(c *gin.Context) {
		createJSON(c)
	})

	router.Run(":8080")
}
