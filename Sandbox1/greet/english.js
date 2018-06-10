const greeting = require('./greeting.json');
const util = require('util');

module.exports = function () {
    console.log(greeting['en']);
    util.log(greeting['en']);
}