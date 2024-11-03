 const express = require('express');
 const multer = require('multer');
const { sizeControl } = require('../../controlers/admin-panal/parentcategorycontrollers');

 const addsize = express.Router();
 addsize.use(multer().none());

 addsize.post('/addsize',sizeControl)

 module.exports= addsize;
