const greet = require('./greet');
greet();

const greet2 = require('./greet2');
greet2.hello();

const greet3 = require('./greet3');
greet3.hello();
greet3.name = 'Shweta Suman';

const greet4 = require('./greet4');
var x = new greet4();
console.log(x);