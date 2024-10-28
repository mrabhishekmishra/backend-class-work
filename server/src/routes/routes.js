const express=require('express');

const parentrouter = require('./admin-panal/parent-category.js');

const adminpanalroute =express.Router();

adminpanalroute.use('/admin-panal',parentrouter);

module.exports={
    adminpanalroute
}