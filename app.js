
const express = require('express');

const app = express();

const responses = {
    "/": "<h1>Main page</h1>",
    "/about": "<h1>About page</h1>",
    "/contact": "<h1>Contact page</h1>"
};

app.get('/', function (request, response) {
    response.send(responses['/']);
});

app.get('/about', function (request, response) {
    response.send(responses['/about']);
});

app.get('/contact', function (request, response) {
    response.send(responses['/contact']);
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});

