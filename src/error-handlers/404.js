'use strict';

module.exports = (request, response,next) => {
    console.log(error);
    response.status(404).send(error);
    next();
};
//  Sends a 404/Not-Found message as the response
// Import this into your server and set it up to be “used” after your other routes