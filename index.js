
const http = require('http');


function handler(req, res) {

	
	res.setHeader("Content-Type", "text/html; charset=utf-8;");
	
	const url = req.url;

	if (url === "/") {
		res.statusCode = 302;
		res.setHeader("Location", "/newpage");
	}
	else if (url == "/newpage") {
		res.write("New address");
	} else {
		res.write("Not found");
		res.statusCode = 404;
	}

	res.end();
}

server = http.createServer(handler);

server.listen(3000);
