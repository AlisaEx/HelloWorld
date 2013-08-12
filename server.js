var http = require("http");
var url = require("url");
function start(route, handle){
	function respond(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved.")

		route(handle, pathname);

		response.writeHead(200, {"content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}
	http.createServer(respond). listen(8888);
	console.log("The server has started.")
}

exports.start = start;