const obj = function() {
    this.name = 'Nishant Kumar';
    this.hello = function() {
        console.log('Hello ' + this.name);
    }
}

module.exports = new obj();