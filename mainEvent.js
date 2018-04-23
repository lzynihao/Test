var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connect successfully!');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);


eventEmitter.on('data_received', function() {
    console.log('data received successful');
});

eventEmitter.emit('connection');

console.log('program process finish');

