const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb+srv://abhishekmishra342001:Abhi2001@abhishek.9kvuy.mongodb.net/?retryWrites=true&w=majority&appName=Abhishek'

const app = express();
app.use(express.json());

//conection part 
mongoose.connect(url)
.then(()=>{

    console.log('mongodb connection is sucessfull');

})
.catch((error)=>{

    console.log(errorn)
})

// create schema

 const userschema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
    ,
    password:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    }

 })

 const User = mongoose.model('user',userschema);

// create insert route 

app.post('/create-user',(req,res)=>{
    try {
        console.log(req.body);
      res.status(200).json({massege:'api is sucessful fatch'});
     
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'});
    }
})

// espress give port 

app.listen(2001 , ()=>{

    console.log('server is running on port 2001')

})
