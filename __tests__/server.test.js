'use strict';

const server = require('../src/server.js')
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');
const request = supertest(server.app);

describe('testing server', () => {
    it('should respond with a 404 error on a bad route', async() => {
        const response = await request.get('/badroute');
        expect(response.status).toBe(404);
    });
    it('should reject PUT requests', async () => {
       const response = await request.post('/person');
       expect(response.status).toBe(404);
    });
    it('should reject PATCH requests', async () => {
    const response = await request.patch('/person');
    expect(response.status).toBe(404);
    });
    it('should reject DELETE requests', async () => {
    const response = await request.delete('/person');
    expect(response.status).toBe(404);
    });
    it('should show a 500 error if there is no name in the query string', async () => {
     const response = await request.get('/person?name=');
    expect(response.status).toBe(500);
    });
    it('should respond with a name when there is a name in the query', async () => {
    const response = await request.get('/person?name=fred').
    expect(response.status).toBe(200);
    });
    it('given a name in the query string, the output object is correct', async() => {
    const response = await request.get('/person?name=fred');
        expect(JSON.parse(response.text)).toBe({
            name: 'fred'
        });
    });
});

//Assert the following
// 404 on a bad route
// 404 on a bad method
// 500 if no name in the query string
// 200 if the name is in the query string
// given a name in the query string, the output object is correct