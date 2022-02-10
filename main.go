package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

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

/*
   "id": 1,
   "category": "other",
   "name": "Assassins Creed",
   "duration": "01:55:30",
   "size": 34.5,
   "codec": "hevc",
   "bitrate": 40.77,
   "resolution": "3840x2160"
*/

// getAlbums responds with the list of all albums as JSON.
func getMovies(c *gin.Context) {
	movies := readMovies()
	c.IndentedJSON(http.StatusOK, movies)
}

func getMovieById(c *gin.Context) {
	id := c.Param("id")

	movies := readMovies()

	for _, a := range movies.Movies {
		if strconv.Itoa(a.ID) == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "movie not found"})
}

func readMovies() Movies {
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

	return movies
}

func main() {
	router := gin.Default()
	router.GET("/albums", getMovies)
	router.GET("/albums/:id", getMovieById)

	router.Run("localhost:8080")

	// movies := readMovies()
	// fmt.Println(movies)
}
