'use strict';

require('dotenv').config();

const server = require('../src/server.js');
const { db } = require('../src/models/index')
const supertest = require('supertest');
const request = supertest(server.app);

// Tom : https://github.com/MuckT/basic-api-server/blob/dev/src/routes/clothes.test.js

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('web server', () => {

  it('can respond with a 404 on an invalid method', async () => {
    const response = await request.put('/hello');
    expect(response.status).toBe(404);
  });

  it('can add a record', async () => {
    const response = await request.post('/customer').send({
      firstName: 'customer first name',
      lastName: 'customer last name',
      age: 1,
      hasOrderedBeer: true,
    })

    expect(response.status).toEqual(200);
    expect(response.body.firstName).toEqual('customer first name');
    expect(response.body.lastName).toEqual('customer last name');
    expect(response.body.age).toEqual(1);
    expect(response.body.hasOrderedBeer).toEqual(true);

  });

  it('can get a list of records', async () => {

    const response = await request.get('/customer')
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();

  });

  it('can get a record', async () => {

    const response = await request.get('/customer/1');
    expect(response.status).toEqual(200);
    expect(response.body.firstName).toEqual('customer first name');
  
  });

  xit('can update a record', async () => {

    const data = {
      firstName: 'customer first name',
      lastName: 'customer NEW last name',
      age: 1,
      hasOrderedBeer: true,
    }

    const response = await request.put('/customer/1',data);

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.firstName).toEqual('customer first name');
    expect(response.body.lastName).toEqual('customer NEW last name');
    expect(response.body.age).toEqual(1);
    expect(response.body.hasOrderedBeer).toEqual(true);

  });

  it('can delete a record', async () => {

    const response = await request.delete('/customer/1');
    expect(response.status).toBe(204);

  });

});
