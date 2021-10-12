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
    const response = await request.post('/beer').send({
      name: 'test',
      calories: 100,
      size: 16,
    })

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.calories).toEqual(100);
    expect(response.body.size).toEqual(16);

  });

  it('can get a list of records', async () => {

    const response = await request.get('/beer')
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();

  });

  it('can get a record', async () => {

    const response = await request.get('/beer/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  
  });

  xit('can update a record', async () => {

    const data = {
      name: 'new test',
      calories: 100,
      size: 16,
    }

    const response = await request.put('/beer/1', data);

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(typeof response.body).toEqual('object');
    expect(response.body.name).toEqual('new test');
    expect(response.body.calories).toEqual(100);
    expect(response.body.size).toEqual(16);

  });

  it('can delete a record', async () => {

    const response = await request.delete('/beer/1');
    expect(response.status).toBe(204);

  });

});
