 //in this module we use one of those logging services
//for login our messages. There are websites out there 
//they provide logging as a service they give us an URL and we can 
//send an HTTP request to that URL to log messages in the cloud


const EventEmitter = require('events'); 
 
var url = 'http://mylogger.io/log';

console.log(__filename);
console.log(__dirname);

class Logger extends EventEmitter{

     log(message){
        //Send an HTTP request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'});
    
        //It's the logger module should emit or signal an event saying that a message is logged
    
    }
    
}




///the variables & functions are scoped to this module.
///To use it in our main module(app.js) we need to make it
///public -->{using exports}

module.exports = Logger;
//to export url
//module.exports.endPoint = url;



