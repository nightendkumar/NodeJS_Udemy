'use strict';

const express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use('/assets/', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Intercepted the request : ' + req.url );
    next();
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head><link rel="stylesheet" href="/assets/style.css"></head><body>This is ' + req.params.id + '.</body></html>');
});

app.get('/api', function (req, res) {
    const data = {
        name: 'Nishant',
        age: 29
    }
    res.json(data);
});

app.listen(port);