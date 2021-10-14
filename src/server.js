
'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('../src/middleware/404');
const serverErrorHandler = require('../src/middleware/500');
const authRouter = require('./auth/router');

app.use(express.json());
// Process FORM input and put the data on req.body
app.use(express.urlencoded( { extended: true } ));

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
