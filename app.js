
const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('index.html', 'utf8', function (error, data) {
        let message = 'Learning Node.js';
        let header = 'Main page';
        data = data.replace('{header}', header).replace('{message}', message);
        response.end(data);
    });
}).listen(3000, function () {
    console.log('Server listening on port 3000');
});