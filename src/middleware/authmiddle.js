'use strict'; 

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {UserModel}=require('../models/index');


const signIn =async (req,res,next)=>{

  if (req.headers['authorization']) {
    let basicHeaderParts = req.headers.authorization.split(' '); 
    let encoded = basicHeaderParts.pop();
    let decoded = base64.decode(encoded); 
    let [username, password] = decoded.split(':');    
    try {
      const user = await UserModel.findOne({ where: {username:username} });
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        req.user=user;
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

module.exports=signIn;