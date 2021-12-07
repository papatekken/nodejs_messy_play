/*
 * source: https://www.w3schools.com/nodejs/nodejs_events.asp
 * execute: node emitEvent.js
 *
 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Run!');
}

//Assign the event handler to an event:
eventEmitter.on('kickOff', myEventHandler);

console.log('StandBy!');
//Fire the 'scream' event:
eventEmitter.emit('kickOff');