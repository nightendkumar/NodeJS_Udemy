// const EventEmitter = require('events');
const EventEmitter = require('./../Sanbox4_Emitter/emitter');

const Util = require('util');

const Greetr = function() {
    this.greetMsg = 'Hello World';
}

Util.inherits(Greetr, EventEmitter)

Greetr.prototype.greet = function() {
    console.log(this.greetMsg);
    this.emit('greet');
}

var g = new Greetr();
g.on('greet', function() {
    console.log('I got an event from emitter');
});

g.greet();
