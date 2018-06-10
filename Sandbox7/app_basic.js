'use strict';
const fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet_2 = fs.readFile(__dirname + '/greet.txt',  function(err, data){
    console.log(data);
});
console.log('Done');

// var buffer = new Buffer('Hello', 'utf8');
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());