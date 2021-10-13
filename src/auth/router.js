'use strict';

const express = require('express');
const basicAuthRouter = express.Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const beforeRegistering = require();
const { User } = require('./models/index');

// Register Route --> create a new user
// http post :3000/signup
// http post :3000/signup usernmae=john password=foo
basicAuthRouter.post('/resgister', beforeRegistering ,registerUser);

// Login Route -- login with username and password
// http post :3000/login -a john:foo
basicAuthRouter.post('/login',loginUser);

async function registerUser(req,res){
  try{
    req.body.password = await bcrypt.hash(req.body.password,10);
    const record = await User.create(req.body);
    res.status(200).json(record);
  }catch(e){
    res.status(403).send(`ERR Registering User`);
  }
}

async function loginUser(req,res){
  
  let basicHeaders = req.headers.authorization.split(' ');
  let encodedString = basicHeaders.pop();
  let decodedString = base64.decode(encodedString);
  let [username,password] = decodedString.split(':');

  try{
  
    const user = await User.findOne({ where: { username} });
    const valid = await bcrypt.compare(password, user.password);
    if(valid){
      res.status(200).json(user);
    }

  } catch(e) {
    res.status(403).send('Invalid Login'); 
  }
}

module.exports = basicAuthRouter;
