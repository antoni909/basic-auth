'use strict';

require('dotenv').config();

const server = require('./src/server.js');

const PORT = process.env.PORT || 3001;

const { db } = require('./src/auth/models/index.js');

// create table first then start up the server
db.sync()
  .then(()=> { server.start(PORT); })
  .catch(console.error);
