
const Emitter = require('events');
let emitter = new Emitter();
let eventName = "greet";

emitter.on(eventName, function() {
	console.log("Hello all!");
});

emitter.on(eventName, function() {
	console.log("Hello all 2!");
});

emitter.emit(eventName);
