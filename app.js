
const app = require('express')();

app.get('/', function (request, response) {
    response.send(JSON.stringify({
        status: "OK",
    }, null, 4));
});

app.listen(8080, function () {
    console.log('Application listening on 8080...');
});