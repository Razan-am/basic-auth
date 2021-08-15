'use strict';

const express = require('express');
const pageNotFound=require('./error/404');
const errorHandller=require('./error/500');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);

app.use('*',pageNotFound);
app.use(errorHandller);

module.exports={
  app:app,   
};