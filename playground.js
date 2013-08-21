// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY
var http    = require("http");
var request  = require("superagent");
var url     = require("url");

function onRequest(request, response){
  console.log("Request recieved");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello world.\n");
  response.end();

  }

http.createServer(onRequest).listen(8001);
console.log("Server Started.");