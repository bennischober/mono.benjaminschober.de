package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"strconv"

	. "api.benjaminschober.de"
)

// handles db connection
func getById(id string) (Movie, error) {
	// placeholder for now
	var movie Movie

	// get all instead of sql
	movies, err := getAll()
	if err != nil {
		return movie, nil
	}

	for _, a := range movies.Movies {
		if strconv.Itoa(a.ID) == id {
			return movie, nil
		}
	}

	return movie, errors.New("Not found!")
}

func getAll() (Movies, error) {
	var movies Movies

	// Open our jsonFile
	jsonFile, err := os.Open("./data/movies.json")
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
		return movies, err
	}

	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)

	//var result map[string]interface{}

	json.Unmarshal(byteValue, &movies)

	return movies, nil
}
