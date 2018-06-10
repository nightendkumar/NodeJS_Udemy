// const Emitter = require('./emitter');
const Emitter = require('events');
const config = require('./config').events;

var emtr = new Emitter();
emtr.on(config['GREET'], function () {
    console.log('Hello from Emitter');
});
emtr.on('greet', function () {
    console.log('Hello from Emitter Again');
});

emtr.emit('greet');


// ------------------------------------------------

const person = {
    greet : function() {
        console.log('Hello ' + this.firstName);
    }
}
var john = Object.create(person);
john['firstName'] = 'Jogn';
john.greet();