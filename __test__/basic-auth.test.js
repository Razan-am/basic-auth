'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);


describe('my API Server', ()=> {

  it('Sign in', async () => {
   
    const response = await request.post('/signin').auth('testing','0000'); 
    expect(response.status).toEqual(200);
  });

  it('Sign up', async () => {
    let obj ={
      username:'testing',
      password:'0000',
    };
    const response = await request.post('/signup').send(obj); 
    expect(response.status).toEqual(200);
  });
});