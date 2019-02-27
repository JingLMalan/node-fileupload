const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = function() {
  console.log(`这是一个事件处理器`);
}

eventEmitter.on("发射",myEventHandler);

setTimeout(() => {
  eventEmitter.emit('发射');
},5000);