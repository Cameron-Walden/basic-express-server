'use strict';

module.exports = (request, response,next) => {
    console.log(`the method used was ${request.method} on path ${request.path}`);
    next();
}

//Performs a console.log with the request method and path
//Import this into your server and set it up to run at the application level for all routes