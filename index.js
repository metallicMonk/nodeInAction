const EventEmitter = require('events');

class MyEvitter extends EventEmitter {}

const myEmitter = new MyEvitter();

myEmitter.on('event', function() {

    console.log('an event occured!');
})

myEmitter.emit('event');
