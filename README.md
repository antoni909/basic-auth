<h1 align="center"> Hola, welcome to api-server 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/antoni909/api-server#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/antoni909/api-server/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/antoni909/api-server/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/antoni909/basic-api-server" />
  </a>
</p>

> Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

### 🏠 [GitHub Repo](https://github.com/antoni909/api-server)

### ✨ [Heroku Production Deployment](https://collections-api-server.herokuapp.com/)

### Routes

Endpoint:

  ```sh
    /beer
  
    /customer
  ```

### UML

![UML api-server](./assets/UML_collections-api-server.jpg)

### Techonology used in this Project

```sh
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jest": "^27.0.4",
    "pg": "^8.7.1",
    "sequelize": "^6.6.5",
    "sqlite3": "^5.0.2",
    "supertest": "^6.1.3"
```

CRUD and REST methods:

CRUD Operation: Create
REST Method: POST
Path: /beer
    - Input: JSON Object in the Request Body
    - Returns: The record that was added to the database.
    - You must generate an ID and attach it to the object.
    - You should verify that only the fields you define get saved as a record.
    - Get All Records

CRUD Operation: Read
REST Method: GET
Path: /beer
    - Returns: An array of objects, each object being one entry from your database.
    - Get One Record

CRUD Operation: Read
REST Method: GET
Path: /beer/1
    - Returns: The object from the database, which has the id matching that which is in the path.
    - Update A Record

CRUD Operation: Update
REST Method: PUT
Path: /beer/1
    - Input: JSON Object in the Request Body
    - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
    - You should verify that only the fields you define get saved as a record.
    - Delete A Record

CRUD Operation: Destroy
REST Method: DELETE
Path: /beer/1
    - Returns: The record from the database as it exists after you delete it (i.e. null).

### DOCS USED

[Express and Express Router](https://expressjs.com/en/4x/api.html#router.route)
[Sequelize](https://sequelize.org/master/)
[JEST](https://archive.jestjs.io/docs/en/getting-started.html)
[SuperTest](https://www.npmjs.com/package/supertest)

### Project Details

[Home Repo](https://github.com/antoni909/api-server)

[PR - dev to main](https://github.com/antoni909/api-server/pull/5)

[Assignment Instructions - Lab 04](./assignment.md);

[Research Notes](./notes.md)

### Install

```sh

npm i

```

### Usage

```sh
npm run dev
```

### Run tests

```sh
npm run test
```

### Author

👤 **Lorenzo Ortega**

* Github: [@antoni909](https://github.com/antoni909)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/lorenzo-ortega-antoni\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/lorenzo-ortega-antoni\/)

### 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/antoni909/server-deployment-practice/issues). You can also take a look at the [contributing guide](https://github.com/antoni909/server-deployment-practice/blob/master/CONTRIBUTING.md).

### Show your support

Give a ⭐️ if this project helped you!

### 📝 License

This project is [MIT](https://github.com/antoni909/server-deployment-practice/blob/master/LICENSE) licensed.

Copyright © 2021 [Lorenzo Ortega](https://github.com/antoni909).<br />

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
