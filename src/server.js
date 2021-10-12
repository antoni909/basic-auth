
'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');
const beerRouter = require('./routes/beer');
const customerRouter = require('./routes/customer');

app.use(express.json());
app.use(beerRouter);
app.use(customerRouter);
app.use('*',notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  app: app,
  start: port => {
    if(!port){throw new Error('missing PORT')};
    app.listen(port, () => {
      console.log(`server listening PORT: ${port}`);
    });
  },
};
