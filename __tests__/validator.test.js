'use strict';

const validator = require('../src/middleware/validator.js');

//force an error(500) when request isnt valid
const unexpectedErrorHandler = require('../src/error-handlers/500.js');

describe('should send the request through when valid', () => {
    it('should run error 500 on invalid query', () => {
        // const request = {
        //     query: ''
        }
    });
});


//Checks the query string for a name property
//Sends the request through when valid, forces an error when not
// f valid, send a JSON object through the response with the name value in it
// i.e. {name: "fred" }