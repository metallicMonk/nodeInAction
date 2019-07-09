
const http = require('http');

const fs = require('fs');

function handler(req, res) {

	console.log(`Requested address: ${req.url}`);
	const filePath = req.url.substr(1);
	
	fs.readFile(filePath, function(err, data) {

		if (err) {
			res.statusCode = 404;
			res.end("Resourse not found");
		} else {
			res.end(data);
		}
	});
}

const server = http.createServer(handler);

server.listen(3000, function() {
	console.log("server started at 3000");
});

