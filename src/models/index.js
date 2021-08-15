'use strict';

require ('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : 'postgres://localhost:5432/auth';
const UserModel = require('./user-model');

const sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = { 
  UserModel:UserModel(sequelize, DataTypes),
  db: sequelize,
};