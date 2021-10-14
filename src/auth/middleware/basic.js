'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { User } = require('../models/index');

async function basicAuthentication(req, res, next){

  let basicHeaders = req.headers.authorization.split(' ');
  let encodedString = basicHeaders.pop();
  let decodedString = base64.decode(encodedString);
  let [username,password] = decodedString.split(':');

  // const userFromDB = await User.findOne({ where: { username} });
  // const isValid = await bcrypt.compare(password, userFromDB.password);

  req.user = await User.auth(username,password);
  next();

  // (isValid)
  //   ? (res.locals.userFromDB = userFromDB) && next()
  //   : next('Authentication Err');
}

module.exports = basicAuthentication;
