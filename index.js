
const fs = require('fs');


fs.readFile('hello.txt', 'utf-8', function(err, data) {

    if (err) throw err;
    console.log('Asynchronous')
    console.log(data);
});

content = fs.readFileSync('hello.txt', 'utf-8');

console.log('Synchronous');
console.log(content);

