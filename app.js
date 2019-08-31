
const app = require('express')();
const fs = require('fs');

app.use(function (request, response, next) {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minute}:${seconds} ${request.method} ${request.url} ${request.get('user-agent')}`;

    console.log(data);
    fs.appendFile('server.log', data + '\n', function () { });
    next();
});

app.get('/', function (request, response) {
    response.send('Get route /');
});

app.listen(8080, function () {
    console.log('Application listening on 8080...');
});