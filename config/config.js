require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": '127.0.0.1',
    "dialect": "postgres"
  },
  "test": {
    "username": "username",
    "password": "password",
    "database": "test",
    "host": '127.0.0.1',
    "dialect": "sqlite:memory:"
  },
  "production": {
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASSWORD,
    "database": process.env.PROD_DB_DATABASE,
    "host": '127.0.0.1',
    "dialect": "postgres"
  }
}
