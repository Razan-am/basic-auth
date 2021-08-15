'use strict';

require('dotenv').config();

const {app}=require('./src/server');
const {db}=require('./src/models/index');

db.sync().then(()=>{
  app.listen(8000,()=> console.log('running on ', 8000));
}).catch( (e)=> {console.error(e);});
