'use strict';

// imports
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('../utils/collections-class');
const beerSchema = require('../models/beer');
const customerSchema = require('../models/customer');

// connect to a db 
const POSTGRES_URI = 
    process.env.NODE_ENV === 'test'
    ? 'sqlite:memory' 
    : process.env.DATABASE_URL;

// console.log(' *** POSTGRES_URI : ', POSTGRES_URI)

let sequelizeOptions = process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
let beerModel = beerSchema(sequelize, DataTypes);
let customerModel = customerSchema(sequelize, DataTypes);


let beerCollection = new Collection('beer', beerModel  );
let customerCollection = new Collection('customer', customerModel  );

module.exports = {
  db: sequelize,
  Customer: customerCollection,
  Beer: beerCollection,
};
