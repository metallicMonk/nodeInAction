
const http = require('http');


function handler(req, res) {

	res.setHeader("UserId", 333);
	res.setHeader("Content-Type", "text/html; charset=utf-8;");
	res.write("<h2>Hi there!</h2>");

	res.end();
}

server = http.createServer(handler);

server.listen(3000);
