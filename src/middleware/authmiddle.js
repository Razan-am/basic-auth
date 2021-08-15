'use strict'; 

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {UserModel}=require('../models/index');

const signUp =async (req,res,next)=>{

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.record = await UserModel.create({
      username : req.body.username,
      password: req.body.password,
    });
    console.log('record >>>>> ', req.record);
    res.status(201).json(req.record);
    next(); 
  } catch (e) {
    console.log(e);
    next('Invalid signing up');  
  }
};


const signIn =async (req,res,next)=>{

  if (req.headers['authorization']) {
    let basicHeaderParts = req.headers.authorization.split(' '); 
    let encoded = basicHeaderParts.pop();
    let decoded = base64.decode(encoded); 
    let [username, password] = decoded.split(':');    
    req.username=username;
    try {
      const user = await UserModel.findOne({ where: {username:username} });
      const valid = await bcrypt.compare(password, user.password);
      req.user=user;
      if (valid) {
        next();               
      } else {              
        res.status(200).json({username:username,id:user.id});   
        next('Invalid UserName and Password');
      }
    } catch(e) {
      console.log(e);
      next('Invalid UserName and Password');     
    }
  }
};

module.exports={signUp,signIn};