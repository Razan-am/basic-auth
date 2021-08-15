'use strict';

const express = require('express');
const router = express.Router();
const bcrypt =require('bcrypt');
const signIn= require('./middleware/authmiddle');
const {UserModel}=require('./models/index');

router.get ('/',(req,res)=>{
  res.send('everything is working fine');
});

router.get ('/status',(req,res)=>{
  res.send({
    domain:'https://basic-authh.herokuapp.com/',
    status:'running',
    port:'8000',
  });
});


router.post('/signin',signIn,async(req, res) => {
  const user =req.user;
  await res.status(200).json(user);
});

router.post('/signup',async (req,res)=>{

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UserModel.create({
      username : req.body.username,
      password: req.body.password,
    });
    console.log('record >>>>> ', req.record);
    res.status(200).json(record);
  } catch (e) {
    console.log(e);
    res.send('Invalid signing up');  
  }
});
 
module.exports= router;