var requestHandlers = require("../modules/requestHandlers");
var routes = require("../modules/routes");
var path = require('path');

 function route(pathname, response){

 	var pathext = path.extname(pathname);
 	
 	if(typeof routes.returnRoutes(pathname) === 'function'){
 			//The path is in the router map it to the correct function.
 			routes.returnRoutes(pathname)(response);

 	}

 	else if(pathext === '.js' || pathext === '.css' || pathext === '.otf'){
 			//The path contains a .css or .js file serve it accordingly
 			console.log("Request type asset detected for " + pathname);
 			requestHandlers.asset(pathname, pathext, response);
 			

 	}

 	else{

 		//Path not detected in this app serve a 404

 		console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();


 	}



 }

 exports.route = route;