'use strict';

module.exports = (error, request, response, next) => {
    console.log(error);
    respopnse.status(500).send(error);
}

// Sends a 500/Server Error message as the response
// Import this into your server and set it up to be “used” as the last route