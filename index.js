'use strict';
const server          = require('./server');
const router          = require('./router');
const requestHandlers = require('./requestHandlers');

let handle = {};

//handle ["/" , "/start" , "/upload"] = [ requestHandlers.start , requestHandlers.start , requestHandlers.upload ] ;

handle ["/"]        = requestHandlers.start;
handle ["/start"]   = requestHandlers.start;
handle ["/upload"]  = requestHandlers.upload;
handle ["/show"]    = requestHandlers.show;

console.log(handle);
server.fire(router.route, handle);
