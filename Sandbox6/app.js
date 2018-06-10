const util = require('util');

var obj = {
    name: 'Nishant',
    call: function () {
        console.log(`Calling `, this.name);
    }
}

obj.call();
obj.call.apply({ name: 'Kumar' });

function Person() {
    this.name = 'Name';
}

Person.prototype.greet = function() {
    console.log(this.name + ' says Hello');
}

function Cop() {
    Person.call(this);
    this.badgeNumber = 1234;
}
util.inherits(Cop, Person);
new Cop().greet();

