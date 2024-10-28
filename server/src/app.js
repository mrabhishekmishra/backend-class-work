const express = require('express');
const { adminpanalroute } = require('./routes/routes');

const allroutes = express.Router();


 allroutes.use('/allroutes',adminpanalroute);

 module.exports= {
    allroutes
 }