package main

// import (
// 	"encoding/json"
// 	"net/http"
// )

// type Movie struct {
// 	Name string `json:"name"`
// 	ID   string `json:"id"`
// }

// type movieHandlers struct {
// 	store map[string]Movie
// }

// func (h *movieHandlers) get(w http.ResponseWriter, r *http.Request) {
// 	movies := make([]Movie, len(h.store))

// 	i := 0
// 	for _, movie := range h.store {
// 		movies[i] = movie
// 		i++
// 	}

// 	jsonBytes, err := json.Marshal(movies)
// 	if err != nil {

// 	}

// 	w.Write(jsonBytes)
// }

// func newMovieHandlers() *movieHandlers {
// 	return &movieHandlers{
// 		store: map[string]Movie{
// 			"id1": Movie{
// 				Name: "GOT",
// 				ID:   "id1",
// 			},
// 		},
// 	}
// }

// // func main() {
// // 	mh := newMovieHandlers()
// // 	http.HandleFunc("/movies", mh.get)
// // 	err := http.ListenAndServe(":8080", nil)
// // 	if err != nil {
// // 		panic(err)
// // 	}
// // }
