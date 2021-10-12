'use strict';

module.exports = (req,res,next) => {
  console.log('from logger mw','req.method: ',req.method,'req.header: ', req.headers, 'req.path',req.path);
  // use next() to move to next route handler function
  next();
};
