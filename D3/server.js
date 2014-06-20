var http	= require("http");
// var url 		= require("url");
var request = require("superagent");

var root = "http://ws.audioscrobbler.com/2.0/?"
var method = "user.gettopartists";
var user = "alisatrocity";
var period = "overall";
var apikey = "8148fb40ef9511752203d2c4591e63d0";


function onRequest(req, res){
	var api = root + "method=" + method + 
					"&user=" + user + 
					"&api_key=" + apikey + 
					"&format=json";
	console.log("Request recieved.");
	request
		.get(api)
		.end(function(err, response){
			console.log("Sending request");
			if(err){
				console.log(err);
			}
			if(response.error){
				console.log(response.err);
			}
			// console.log(response.body.artist.name);
			var artists = JSON.stringify(response.body.topartists.artist);
			// console.log(artists);
		var headers = {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With"
        }
        res.writeHead(200, headers);
        res.end(artists);
        console.log("Response Sent.")
		});
}

http.createServer(onRequest).listen(8001);
console.log("Server started.");