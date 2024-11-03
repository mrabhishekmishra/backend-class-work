const express = require('express');
const multer =require('multer');
const { parentControl } = require('../../controlers/admin-panal/parentcategorycontrollers');

const parent = express.Router();
parent.use(multer().none());

parent.post('/parent',parentControl)

module.exports = parent;