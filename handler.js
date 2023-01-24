'use strict';
const app = require('./src/index');
const serverless = require('serverless-http');

module.exports.hello = serverless(app);
