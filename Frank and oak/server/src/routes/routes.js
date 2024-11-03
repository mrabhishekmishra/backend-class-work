const express = require('express');
const parent = require('./admin-panal/parentcategory');
const addsize = require('./admin-panal/addsize');
const addcolor = require('./admin-panal/addcolor');

const routesapi = express.Router();
const addsizeroutes =  express.Router();

routesapi.use('/addparentroutes', parent);
routesapi.use('/addsizeroutes',addsize);
routesapi.use('/addcolorroutes',addcolor);



module.exports = {
    routesapi
}