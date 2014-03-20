//Required Node http modules
var http = require("http");
var url = require("url");

//run start function when module is loaded
function start(route){

	function onRequest(request, response) {

		//Use node url module to get url pathname and assign it to a variable.
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved.");

		//Pass the pathname to the router
		route(pathname);

		//Send http status and content type.
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World");
		response.end();

	}

	http.createServer(onRequest).listen(8888);
	console.log("Server Has Started.");

}

exports.start = start;