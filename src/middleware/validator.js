'use strict';

module.exports = (request, response, next) => {
    let name = request.query.name;
    if(!name) {
        next('You\'re getting an error when searching for a name');
    } else {
        next();
    }
}

// Checks the query string for a name property
// Sends the request through when valid, forces an error when not