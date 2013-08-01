package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"os"
	"log"
	"encoding/json"
)

const api_key = "8148fb40ef9511752203d2c4591e63d0"
const user = "alisatrocity"

func check( err error ){
	if err != nil{
		log.Println(err)
		os.Exit(1)
	}
}
type TopArtists struct{
	top string `json: "topartists:"`
	artist []Artists `json: "topartists>artist:"`
}

type Artists struct{
	Name string `json: "name:"`
	Playcount string `json: "playcount:"`
}
func DownloadUrl(url string) []bytes){
	resp, err := http.Get(url)
	check(err)
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	check(err)
	return data
}


func main(){
	data := DownloadUrl("ws.audioscrobbler.com/2.0/?format=json&api_key="+api_key+"&method=user.getTopArtists&user="+user)
	a := new(TopArtists)
	err := json.Unmarshal(data, a)
	check(err)
	fmt.Println(a.top)
	for _, k := range a.artist {
		fmt.Printf("Artist: %s-%s\n", k.Name, k.Playcount)
	}
}