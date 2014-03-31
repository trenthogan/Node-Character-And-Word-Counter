//Required Node http modules
var http = require("http");
var url = require("url");
var open = require('open');

//run start function when module is loaded
function start(route){

	function onRequest(request, response) {

		//Use node url module to get url pathname and assign it to a variable.
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved.");

		//Pass the pathname to the router
		route(pathname, response);


	}

	http.createServer(onRequest).listen(8888);
	//open('http://localhost:8888/');
	console.log("Server Has Started.");

}

exports.start = start;