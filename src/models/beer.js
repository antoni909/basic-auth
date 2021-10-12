'use strict'

const Beer = (sequelize, DataTypes) => sequelize.define('beer',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // hasBeenSipped: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  // }
});

module.exports = Beer;
