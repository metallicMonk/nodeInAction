
const fs = require('fs');

let writableStream = fs.createWriteStream("hello.txt");

writableStream.write("Hello world");
writableStream.write("One more sentense to the stream...\n");
writableStream.end("Ending of stream");

let readableStream = fs.createReadStream("hello.txt", "utf8");

readableStream.on("data", function(chunk) {
	console.log(chunk);
})

