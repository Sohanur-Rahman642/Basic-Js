
/*
///Sample Node Program Execution 
function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Sohan');

///.............Node Module System...........////
//Global object


var message = 'lol  :)';
global.console.log(message);

//every node application has atleast one file or one module 
//which we call main module
console.log(module);
//In node, every file is a module
//and variable & functions of the module 
//are scoped to that module. They aren't available
//outside of the module
*/

///To load the module we use the require() function 
/*const log = require('./logger');

console.log(log);

log('message');

///information about path 
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);


///information about operating system
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


//Template String(ES6)--> used to write string without concatenation
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//Work with files in node
const fs = require('fs');

///Synchronous read directory function
/*const files = fs.readdirSync('./');
console.log(files);*/

///Asnchrnous read directory function
/*const afs = fs.readdir('./',function(err,files){
    if(err)console.log('Error',err);
    else console.log('Result',files);
});

///All assynchronous function takes a function as a parameter
///which is called Callback. A callback has two params-->
///error & result (an array of strings)
///It's preferred to use assynchroous function in node 
///because we don't want our single thread keep busy with one process


///.....................Event..............///
/***
A lot of node's core functionalities is based on 
this concept,Events. Event is basically a signal that
something has happened in our application. For example, in node
we have a class called HTTP that we can use to build a webserver.
So we listen on a port & everytime we recieve  a request on that
port that HTTP class raises an event {Event:New Request}. Our job is
to respond to that event which basically involves reading that request 
& returning the right response
***/



//const EventEmitter = require('events'); //--> when we call require func with passing events param we
//will get EventEmitter class
//EventEmiiter class is a container, it has several methods & properties listed on the documentation of node js


//Register a listener (example)
/*emitter.on('messafeLogged', function(){
    console.log('Listener called');
});



//Raise an event (example)
emitter.emit('messafeLogged'); //--> used to raise an event 

*/

//emit basically means making a noise, produce something - signalling that has happened

//Note: the order is important here. We can't raise an event before registering a lstener. 
//Cause the emit() will check for the registered listener above synchronously. In that case, raising 
//an event before registering a listener would show nothing 

//we can add additional arguments to emit()
// if we have multiple arguments it's a better practice 
//pass them inside an object



/*
const Logger = require('./logger');
const logger = new Logger();

//Register a listener for logger
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});



logger.log('message');
*/

//In the real world it's quite rate to work with emitter object directly like this
// Instead we would want to create a class that has all the capabilities of EventEmitter






///............HTTP MODULE...........///
//Create a basic web server 

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
}); 


//--> this server is an EventEmitter
server.listen(3000); ///3000 is a port 

console.log('Listening on port 3000.....');



/*
//everytime there is a request on new connection this server raises an event 
//so we need an on method to handle that event 
server.on('connection', (socket) => { //--> the name of the event is connection, second argument is a callback & it takes a socket of Socket type as a param and return void
    console.log('New Connection....');
})
// in real this is very basic..we won't work like this. So comment out 
*/

