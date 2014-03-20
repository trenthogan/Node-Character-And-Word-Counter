var requestHandlers = require("../modules/requestHandlers");
var routes = require("../modules/routes");

 function route(pathname, response){

 	//This app only has one page so check we are in the route or redirect
 	if(typeof routes.returnRoutes(pathname) === 'function'){

 			routes.returnRoutes(pathname)(response);

 	}else{

 		console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();


 	}



 }

 exports.route = route;