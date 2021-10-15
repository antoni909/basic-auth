'use strict';
const bcrypt = require('bcrypt');
// before, user was implicit return, now must use return keyword
const User = (sequelize,DataTypes) => {

  const users = sequelize.define('User', {
  
    username: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  });

  // lifecycle vs constructor methods
  users.beforeCreate = async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  };
  
  users.basicAuthenticate = async (username, pw) =>{
    
    try{

      const userFromDB = await users.findOne({ where: { username} });
      const isValid = await bcrypt.compare(pw, userFromDB.password);
      
      if(isValid) return userFromDB;
      else return new Error('Cannot Authenticate');
    
    }catch(e){
      console.log(e);
    }

  };

  return users;

};

module.exports = User;
