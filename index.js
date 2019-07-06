

const src = require('./src');



const express = require('express');



const server = express();

server.get('/', function(req, res) {

    try {
        res.send(src.getLocalizenValue(req.query.Variable, req.query.Language));
    } catch (error) {
        res.send(error.message);        
    }

});

server.listen(3000, 'localhost', function() {

    console.log('server listening on 3000');
});

