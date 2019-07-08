


const fs = require('fs');



let readableDataStream = fs.createReadStream('hello.txt', 'utf8');
let writeableDataStream = fs.createWriteStream('some.txt');

/********************************************************************************
readableDataStream.on('data', function(chunk) {
	writeableDataStream.write(chunk);
})
********************************************************************************/

readableDataStream.pipe(writeableDataStream);

