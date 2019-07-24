
const express = require('express');

const app = express();

app.use(function (request, response) {
    console.log('middleware 1');
    request.next();
});

app.use(function (request, response) {
    console.log('middleware 2');
    request.next();
});

app.get('/', function (request, response) {
    console.log('Route /');
    response.send({ "response": "some response" });
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});

