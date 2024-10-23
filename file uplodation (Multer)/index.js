// init express
const express = require('express');

//call server
const app = express();
app.use(express.json());

// routing
app.get('/', (req,res)=>{
    console.log(req.body)
    res.status(200).json({message:'sucess'});
})

// giveport to server 
app.listen('4000', ()=>{

    console.log('server is runing on port 4000')
})

