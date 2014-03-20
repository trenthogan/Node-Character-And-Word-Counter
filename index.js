var server = require("./modules/server");
var router = require("./modules/router");

server.start(router.route);