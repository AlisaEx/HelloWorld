// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY
// var http    = require("http");
var request  = require("superagent");
// var url     = require("url");

// function onRequest(request, response){
//   console.log("Request recieved");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello world.\n");
//   response.end();
//   }

// http.createServer(onRequest).listen(8001);
// console.log("Server Started.");


// TESTING USAGE OF THROUGH NODE MODULE && LEARNING ABOUT STREAMING DATA
 // request.get(apiUrl)
 // .pipe(through(
 //    function write(data) { 
 //      console.log(data.toString());
 //      this.emit('data', data) 
 //    },
 //    function end() { this.emit('end') }
 //  ))
 // .pipe(res)

 request
   .get('http://www.google.com')
   .end(function(res){
   	console.log(res.body);
   });