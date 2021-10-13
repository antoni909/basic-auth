'use strict';

const { User } = require('./models/index');

// perform a function before you create and save a new user
async function beforeRegister(){
  // what might we want to do programmatically before User data is persisted?
  await User.beforeCreate((user,options)=>{
    console.log(user);
  });
}

module.exports = beforeRegister;
