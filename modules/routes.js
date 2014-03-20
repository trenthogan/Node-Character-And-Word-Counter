//Require Modules
 var requestHandlers = require("../modules/requestHandlers");

//Return Available routes for this application.
function returnRoutes(pathname){

	var routes = {};
	//List of routes and the functions they are assigned to.
	routes["/"] = requestHandlers.home;
	routes["favicon.ico"] = requestHandlers.favicon;

	return routes[pathname];

}

exports.returnRoutes = returnRoutes;

