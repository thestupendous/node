const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message){
	//send http request
	console.log(message);
	emitter.emit(message,)
}

module.exports = log;
