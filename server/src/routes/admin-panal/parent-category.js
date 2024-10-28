const express = require('express');

const parent= express.Router();

parent.post('/parent', (req,res)=>{
    res.status(200).json({massege:'parent api is sucessful fatch'});
})

//export

module.exports= parent;