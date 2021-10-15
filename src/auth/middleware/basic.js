'use strict';

const base64 = require('base-64');
const { User } = require('../models/index');

async function basicAuthentication(req, res, next){

  let basicHeaders = req.headers.authorization.split(' ');
  let encodedString = basicHeaders.pop();
  let decodedString = base64.decode(encodedString);
  let [username,password] = decodedString.split(':');
  
  req.user = await User.basicAuthenticate(username,password);
  next();
}

module.exports = basicAuthentication;

// prior to refactor:
// const userFromDB = await User.findOne({ where: { username} });
// const isValid = await bcrypt.compare(password, userFromDB.password);
// if(isValid){ req.user = userFromDB;next();}
// else{throw new Error('cannot authenticate');
//Alt approach
// (isValid)
//   ? (res.locals.userFromDB = userFromDB) && next()
//   : next('Authentication Err');
