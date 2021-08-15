'use strict';
const {app} = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);


describe('my API Server', ()=> {

  it('Sign in route ', async () => {
    let obj ={
      username:'test2',
      password:'12345',
    };
    const response = await request.post('/signin').send(obj); 
    expect(response.status).toEqual(200);
  });

  it('Sign up route ', async () => {
    let obj ={
      username:'test2',
      password:'12345',
    };
    const response = await request.post('/signup').send(obj); 
    expect(response.status).toEqual(200);
  });
});