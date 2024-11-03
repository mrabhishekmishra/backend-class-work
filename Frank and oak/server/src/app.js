const express = require('express');
const { parentcategory, addsizeroutes, routesapi } = require('./routes/routes');

const allroutes = express.Router();

allroutes.use('/addparentallroutes', routesapi);
allroutes.use('/addsizeallroutes',routesapi);
allroutes.use('/addcolorallroutes',routesapi);

module.exports = {
    allroutes
}