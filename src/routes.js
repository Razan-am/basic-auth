'use strict';

const express = require('express');
const router = express.Router();
const signIn= require('./middleware/authmiddle');
const signUp= require('./middleware/authmiddle');

router.post('/signup',signUp,async(req, res) => {
  await res.status(201).json(req.record);
});
router.post('/signin',signIn,async(req, res) => {
  await res.status(200).json({username: req.username ,id :req.user.id});
});

 
module.exports= router;