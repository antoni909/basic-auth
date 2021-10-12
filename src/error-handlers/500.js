'use strict';

module.exports = (err,req,res,next) => {
  console.log('500 err',err);
  res.status(500).send({ message: err});
};
