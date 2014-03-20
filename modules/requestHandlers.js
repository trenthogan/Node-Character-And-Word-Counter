//Require Modules
fs = require('fs');

function home(response) {

	fs.readFile('./views/index.html', function (err, html) {

	  if (err) throw err;

	  console.log(html);
	  console.log('yes I');
	  //response.writeHead(200, {"Content-Type": "text/html"});
	  response.write(html);
	  response.end();

  	});
}

function favicon(response) {
  console.log("Request handler 'favicon' was called.");
  var img = fs.readFileSync('./favicon.ico');
  response.writeHead(200, {"Content-Type": "image/x-icon"});
  response.end(img,'binary');
}


exports.home = home;
exports.favicon = favicon;