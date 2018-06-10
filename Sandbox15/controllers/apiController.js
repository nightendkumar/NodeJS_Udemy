var mongoose = require('mongoose');
var bodyParser = require('body-parser');

module.exports = function (app) {

	app.get('/api/person/:id', function (req, res) {
		// get that data from database
	});

	app.post('/api/person', function (req, res) {
		// save to the database
	});

	app.post('/api/person', function (req, res) {
		// save to the database
	});

	app.delete('/api/person/:id', function (req, res) {
		// delete from the database
	});

};