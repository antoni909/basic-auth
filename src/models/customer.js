'use strict'

const customer = (sequelize, DataTypes) => sequelize.define('customer',{
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hasOrderedBeer: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

module.exports = customer;
