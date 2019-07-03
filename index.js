
const http = require("http");

function requestListener(req, res) {
    
    res.end("Server response");
}

const server = http.createServer(requestListener);

function startupLogger() {

    console.log("Server lisening on 3000");
}

server.listen(3000, startupLogger);