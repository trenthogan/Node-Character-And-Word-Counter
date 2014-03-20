//Require Modules
var server = require("./modules/server");
var router = require("./modules/router");
var requestHandlers = require("./modules/requestHandlers");

//Start Server
server.start(router.route);