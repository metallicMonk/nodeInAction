
const express = require('express');

const app = express();

app.get('/', function (request, response) {
    if(Object.keys(request.query).indexOf('exit') != -1) throw new Error('Exiting!!!');
    response.send("<h2>Hello express framework!</h2>");
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});

