# General Notes

## TOC

### Trouble Shootig notes

- BUG: Connection Error Sequelize: failed to connect to database: 'store'
- FIX:
    go into my psql and CREATE DATABASE store;

### Authorization vs Authentication

Authorization:

    already authenticated and...
    Are you allowed to do what you are requesting?

Authentication:

    who is making a request?

        Bearer Authentication:
        Auth0 ---gives---> Token (info about user target, i.e. email, profile pic etc...)
        hence, "Bearer Auth" of said token

        Basic Authentication
        using 2 strings
            username or email
            password
        
            Authorization Header:
            contains encoded string that includes username/email & pw
        
            Authorization (really authentication credentials) Middleware:
                checks header for authorization object
                needs to verify presence of user by given name/email
                Validate authenticity of password using encryption lib (bcrypt)

### Login a User

    req.headers.authorization is : "Basic sdkjdsljd="
    To get username and password from this, take the following steps:
      - Turn that string into an array by splitting on ' '
      - Pop off the last value
      - Decode that encoded string so it returns to user:pass
      - Split on ':' to turn it into an array
      - Pull username and password from that array

    Now that we finally have username and password, let's see if it's valid
    1. Find the user in the database by username
    2. Compare the plaintext password we now have against the encrypted password in the db
       - bcrypt does this by re-encrypting the plaintext password and comparing THAT
    3. Either we're valid or we throw an error
### PostgresQL

- allow route handlers to interact with in-memory server 
- will not use 'Persistant' server, will use seqlite in-memory server, used for specifically for testing
  - postgreSQL : starts and runs a psq server. 
  OR
  - use : pg_start / pg_stop to stop/run psql server
- psql is the client side, can connect to server
  - command: psql

- time: 01:45, creating models and sequelize

### for index.js

```sh
// connect to our db depending on POSTGRES-URL || DATABASE_URL
require('dotenv').config()
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
const { Sequelize, DataTypes}= require('sequelize');
```

```sh
// for production site, deploying out
let sequelizeOptions = process.env.NODE_ENV === 'production'
?{
  dialectOptions: {
    ssl:{
      require: true,
      rejectUnauthorized: false,
    }
  }
}
: {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const people = require('./people');

module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes)
}
```

### Configurations

- development obj
- test obj
  - uses sqlite
- production


sqlite 3 - creates instance of your db

(refer to sequelize docs for scripts)

```sh
- scripts
  - init: 'sequelize dbcraete:create', on npm init it creates db if not exist
  - start: "NODE_ENV=production node index.js", node env does not exist until npm start
  - dev: "NODE_ENV=development nodemon index.js"
  - test: "NODE_ENV=test jest --verbose -coverage --watch"
```

### Sync the db and server

```sh
  db.sync().then(
    ()=>{
      server
        .start(3000)
          .catch(console.error());
    }
  )
```

### URL undefined

```sh
  if url undefined, define it in env
                                      port/your-db
  DATABASE_URL= postgres://locoalhost:5432/people
```

### Using/Capturing URL queries and params

To retrieve url params:

```sh
  with queries
  - .../api/user?id=val&token=valTwo
  - retrieve from request object
    - req.query.id
    - req.query.token
  
  params with Routes
  - .../api/:id
  - retrieve from request object
    - req.params.id
```
