var event = require('events');

var eventEmitter = new event.EventEmitter();


var listener1 = function listener1() {
    console.log('listener 1 process');
}

var listener2 = function listener2() {
    console.log('listener 2 process');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + ' count of listener event');

eventEmitter.emit('connection');


eventEmitter.removeListener('connection', listener1);
console.log('listener1 do not listen anymore');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' count of listener event');

console.log('program process finish');
