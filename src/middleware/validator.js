'use strict';

module.exports = (req,res,next) => {
  console.log('validator mw: ',req.query.name);
  // if truthy move to next route..
  if(req.query.name){
    next();
  } else {
  // error message
  // passed using next()
    next('500 : no name in query string');
  // using .send()
    // res.status(500).send('500 : no name in query string');
  }
};
