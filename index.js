
/*

const http = require('http');

http.createServer(function(request, response) {

    response.end('Server works');
}).listen(3000, '127.0.0.1', function() {

    console.log('Starting server...');
});

*/

const http = require('http');


function onStart(startupMessage) { 

    console.log(startupMessage);
}

function handler(req, res) {

    res.end('Operation successfull!');
}

const server = http.createServer(handler);

server.listen(3000, '127.0.0.1', onStart('Server started...'));

