'use strict';

const unexpectedErrorHandler = require('../error-handlers/500.js');

module.exports = (request, response, next) => {
    let name = request.query.name;
    if(!name) {
        next(unexpectedErrorHandler);
    } else {
        next();
    }
}

// Checks the query string for a name property
// Sends the request through when valid, forces an error when not