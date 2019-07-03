
const http = require("http");

http.createServer(function(request, response) {

    response.end("Server response.");
}).listen(3000, "127.0.0.1", function(){

    console.log("Server listening on 3000");
});
