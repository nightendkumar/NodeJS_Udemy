'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets/', express.static(path.join(__dirname, 'public')));
app.use('/', function (req, res, next) {
    console.log('Intercepted the request. URL => ' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

// the method below gets the url and query parameters
app.get('/person/:name', function (req, res) {
    res.render('person', { personName: req.params.name, ID: req.query.id });
});


// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// for html form submission
app.post('/person', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    // res.send('Welcome, ' + req.body.name)
    res.render('person', { personName: req.body.name, ID: 1 });

});

// for REST APIs *Not working
// TODO: fix it
app.post('/api/project', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log('Project name :' + req.body.name);
    console.log('Project location :' + req.body.location);
    res.send('Thank you');
});

app.listen(port);