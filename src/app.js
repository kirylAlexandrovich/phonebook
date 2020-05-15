const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', express.static(`${__dirname}/resources/static/main`));
server.use('/subscriber-form', express.static(`${__dirname}/resources/static/subscriberForm`));

server.use('/', router);

module.exports = server;
