'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const notFoundErrorHandler = require('./error-handlers/404.js');
const unexpectedErrorHandler = require('./error-handlers/500.js');
const app = express();

app.use(logger);

app.get('/test', (request, response) => {
    response.status(200).send('This is the test route');
});

app.get('/', (request, response) => {
    response.status(200).send('This is another route I\'m checking out');
});

app.get('/person', validator, (request, response) => {
    response.status(200).json({'name': `${request.query.name}`})
});


// https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
app.use('*', notFoundErrorHandler);
app.use('*', unexpectedErrorHandler);

const start = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Running on PORT ${PORT} `)
    });
}

module.exports = {start, app};

//Must export an object with a start() method (it should not start on it’s own) and a reference to the express app