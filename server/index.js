const express = require('express');
const { allroutes } = require('./src/app.js');


require('dotenv').config();
require('./src/db/config.js');

const app = express();
app.use(express.json());


app.use('/api',allroutes)


app.listen(process.env.PORTS,()=>{
    console.log(`server is runnig on ${process.env.PORTS}`)
})