'use strict';

const express = require('express');
const authRouter = express.Router();
const authUser = require('./middleware/basic');
const { User } = require('./models/index');

authRouter.get('/', greetUser);
authRouter.post('/register', registerUser);
authRouter.post('/login',authUser,loginUser);

async function greetUser(req,res){
  let message = 'hola, welcome to basic auth app 👋 ';
  res.status(200).send(message);
}

async function registerUser(req,res){
  
  try{

    // req.body.password = await bcrypt.hash(req.body.password,10);
    const record = await User.create(req.body);
    res.status(201).json(record);

  }catch(e){
    res.status(403).send(`ERR Registering User`);
  }
}

async function loginUser(req,res){
  try{
    // let { userFromDB  } = res.locals;
    // console.log('******',req.user);

    res.status(200).json(req.user);
  }catch(e){
    console.log('*** router e: ',e);
  }
}

module.exports = authRouter;
