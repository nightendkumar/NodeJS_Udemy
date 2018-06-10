'use strict';

const Emitter = function () {
}

Emitter.prototype.events = {};
Emitter.prototype.on = function (type, handler) {
    this.events['type'] = this.events['type'] || [];
    this.events['type'].push(handler);
}

Emitter.prototype.emit = function (type) {
    if (this.events['type']) {
        this.events['type'].forEach(listener => {
            listener();
        });
    }
}

module.exports = Emitter;