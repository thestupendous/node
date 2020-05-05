const EventEmitter = require('events');
const emitter = new EventEmitter();


//listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener received a message',arg);
})

//raise event
emitter.emit('messageLogged',{id: 1, url: 'http://'});
