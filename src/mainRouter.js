'use strict';

const express = require('express');
const mainRouter = express.Router();

mainRouter.get('/', greetUser);

async function greetUser(req,res){
  let message = 'hola, welcome to basic auth app 👋 , use a Client to login or register!';
  res.status(200).send(message);
}

module.exports = mainRouter;
