var http = require("http");
function start(){
	function respond(request, response){
		console.log("Request recieved.")
		response.writeHead(200, {"content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}
	http.createServer(respond). listen(8888);
	console.log("The server has started.")
}

exports.start = start;