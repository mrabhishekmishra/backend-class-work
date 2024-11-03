const express = require('express');
const { allroutes } = require('./src/app.js');


require('dotenv').config();
require('./src/db/confiq.js')

const app = express();

app.use(express.json());

app.use('/api', allroutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is runnig on ${process.env.PORT} port`)
})
