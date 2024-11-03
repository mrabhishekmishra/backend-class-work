const express = require('express');
const multer = require('multer');
const { colorControl } = require('../../controlers/admin-panal/parentcategorycontrollers');


const addcolor = express.Router();
addcolor.use(multer().none());
addcolor.use(express.json());

addcolor.post('/addcolor',colorControl)

module.exports= addcolor