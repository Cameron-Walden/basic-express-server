'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware', () => {
    let request = {method: 'GET'};
    let response = {};
    let next = jest.fn();
    console.log() = jest.fn();

    it('should be able to log a method', () => {
        logger(request,response, next);

        expect(console.log).toHaveBeenCalledWith('GET');
        expect(next).toHaveBeenCalled();
    });

    it('should throw an error when a different method is called', async () => {
        request.method = 'PUT';

        logger(request, response, next)
    });
});