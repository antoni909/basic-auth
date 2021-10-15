'use strict';

const express = require('express');
const authRouter = express.Router();
const authUser = require('./middleware/basic');
const { User } = require('./models/index');

authRouter.post('/register', registerUser);
authRouter.post('/login',authUser,loginUser);

async function registerUser(req,res){
  
  try{
    const record = await User.create(req.body);
    res.status(201).json(record);
  }catch(e){
    res.status(403).send(`ERR Registering User`);
  }

}

async function loginUser(req,res){
  try{
    res.status(200).json(req.user);
  }catch(e){
    console.log('*** router e: ',e);
  }
}

module.exports = authRouter;
