const http = require('http');
const port = 8944;

const server = http.createServer((req, res) => {
    res.end('Simple server works...');
});

server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port);
});