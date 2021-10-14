'use strict';

require('dotenv').config();
let userSchema = require('./users-model');
const { Sequelize, DataTypes } = require('sequelize');

// connect to a db 
const DATABASE_URL = 
    process.env.NODE_ENV === 'test'
      ? 'sqlite:memory' 
      : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

let userModel = userSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  User: userModel,
};
