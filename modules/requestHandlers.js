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

function asset(pathname, pathext, response){

	//Handle assets
 			switch(pathext) {
		        case '.css':
		            response.writeHead(200, {"Content-Type": "text/css"});
		            fs.readFile('./' + pathname, 'utf8', function(err, fd) {
		                response.end(fd);
		            });
		            console.log('Routed for Cascading Style Sheet '+ pathname +' Successfully\n');
		        break;
		        case '.js':
		            response.writeHead(200, {"Content-Type": "text/javascript"});
		            fs.readFile('./' + pathname, 'utf8', function(err, fd) {
		                response.end(fd);
		            });
		            console.log('Routed for Javascript '+ pathname +' Successfully\n');
		        break;
		    }

}


exports.home = home;
exports.favicon = favicon;
exports.asset = asset;