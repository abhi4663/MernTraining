var EventEmitter=require('events');

var events=new EventEmitter();
EventEmitter.defaultMaxListeners=50;



for(let a=0;a<20;a++){
events.on('clicked',(b)=>{
    console.log(b+' clicked by A');
})
events.on('clicked',(b)=>{
    console.log(b+' clicked by B');
})
}
events.emit('clicked','button1');

events.on('clicked',(b)=>{
    console.log(b+' not clicked by C');
})
events.emit('clicked','button2');