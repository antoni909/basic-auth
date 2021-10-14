'use strict';
const bcrypt = require('bcrypt');

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

  users.beforeCreate = async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  };
  
  users.auth = async (username, pw) =>{
    
    const userFromDB = await users.findOne({ where: { username} });
    const isValid = await bcrypt.compare(pw, userFromDB.password);
    
    if(isValid) return userFromDB;
    else { return null; }

  };

  return users;
};

module.exports = User;
