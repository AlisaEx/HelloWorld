var http	= require("http");
// var url 		= require("url");
var request = require("superagent");


function onRequest(req, res){
	var api = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=alisatrocity&api_key=8148fb40ef9511752203d2c4591e63d0&format=json";
	console.log("Request recieved.");
	request
		.get(api)
		.end(function(err, response){
			if(err){
				console.log(err);
			}
			if(response.error){
				console.log(response.err);
			}
		var headers = {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With"
        }
        res.writeHead(200, headers);
        res.end(JSON.stringify(response.body.topalbums.album));
		});
}

http.createServer(onRequest).listen(8001);
console.log("Server started.");