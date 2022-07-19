package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// album represents data about a record album.
type Movie struct {
	ID         int     `json:"id"`
	Category   string  `json:"category"`
	Name       string  `json:"name"`
	Duration   string  `json:"duration"`
	Size       float32 `json:"size"`
	Codec      string  `json:"codec"`
	Bitrate    float32 `json:"bitrate"`
	Resolution string  `json:"resolution"`
}

type Movies struct {
	Movies []Movie `json:"movies"`
}

// getAlbums responds with the list of all albums as JSON.
func getMovies(c *gin.Context) {
	movies := readMovies()
	c.IndentedJSON(http.StatusOK, movies)
}

func getMovieById(c *gin.Context) {
	id := c.Param("id")

	movies := readMovies()

	for _, a := range movies {
		if strconv.Itoa(a.ID) == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "movie not found"})
}

func readMovies() []Movie {
	// Open our jsonFile
	jsonFile, err := os.Open("./data/movies.json")
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Successfully Opened ./data/movies.json")
	}

	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)

	//var result map[string]interface{}
	var movies Movies
	json.Unmarshal(byteValue, &movies)

	return movies.Movies
}

func getFileName(pre string, file *multipart.FileHeader) string {
	extension := filepath.Ext(file.Filename)
	const layout = "01-02-2006"
	t := time.Now()
	// add check, if pre is empty or includes whitespace or not allowed characters?
	return pre + "_" + t.Format(layout) + extension
}

func createUserSpace(username string) (string, error) {
	// take care of linux path? windows: /, linux: \
	path := "./tmp/" + username
	if _, err := os.Stat(path); os.IsNotExist(err) {
		if err := os.Mkdir(path, 0755); err != nil {
			return "", err
		}
	}
	return path + "/", nil
}

// Uploads a file to the userspace.
// If the userfolder in the userspace doesn't exist, it will be created.
// If the file already exists, it will be overwritten.
// idea: https://stackoverflow.com/questions/64873546/how-to-upload-multipart-file-and-json-in-go-with-gin-gonic
func handleFileUpload(c *gin.Context) {
	// get file
	file, _ := c.FormFile("file")

	// get userid
	userid := c.PostForm("userid")

	newFileName := getFileName(userid, file)
	dst, dstErr := createUserSpace(userid)
	if dstErr != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "could not create user space" + dstErr.Error()})
		return
	}

	if err := c.SaveUploadedFile(file, dst+newFileName); err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"message": "Unable to save the file. " + err.Error(),
		})
		return
	}

	/*
		send from JS:

		import axios from "axios";

		const form = new FormData();
		form.append("file", "file");
		form.append("name", "Jonathan Jonathanson");

		const options = {
		  method: 'POST',
		  url: 'http://localhost:3000/test/file',
		  headers: {'content-type': 'multipart/form-data; boundary=---011000010111000001101001'},
		  data: '[form]'
		};

		axios.request(options).then(function (response) {
		  console.log(response.data);
		}).catch(function (error) {
		  console.error(error);
		});
	*/

	c.JSON(http.StatusOK, fmt.Sprintf("'%s' uploaded! Found user: '%s'", file.Filename, userid))
}

// further stuff:
// https://willschenk.com/articles/2021/controlling_docker_in_golang/
// https://www.youtube.com/watch?v=OoNeWiJ1Ebk
// https://www.geeksforgeeks.org/how-to-use-go-with-mongodb/


func main() {
	router := gin.Default()
	router.GET("/movies", getMovies)
	router.GET("/movies/:id", getMovieById)

	router.POST("/api/upload/invoice", handleFileUpload)
	router.Run("localhost:3000")

	// movies := readMovies()
	// fmt.Println(movies)
}
