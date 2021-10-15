
'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('../src/middleware/404');
const serverErrorHandler = require('../src/middleware/500');
const authRouter = require('./auth/authRouter');
const mainRouter = require('../src/mainRouter');

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

app.use(mainRouter);
app.use(authRouter);

app.use('*',notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  app: app,
  start: port => {
    if(!port){throw new Error('missing PORT');}
    app.listen(port, () => {
      console.log(`server listening PORT: ${port}`);
    });
  },
};
