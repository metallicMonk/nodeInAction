
const http = require('http');


function handler(req, res) {

	
	res.setHeader("Content-Type", "text/html; charset=utf-8;");
	
	const url = req.url;

	if (url === "/home" || url === "/") {
		res.write("<h1>Home</h1>");
	} else if (url == "/about") {
		res.write("<h1>About</h1>");
	} else {
		res.write("<h1>Unknown!</h1>");
	}

	res.end();
}

server = http.createServer(handler);

server.listen(3000);
