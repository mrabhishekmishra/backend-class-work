const { MongoClient, CURSOR_FLAGS } = require('mongodb');    // import mongobd 

const express = require('express');     // import express 

const multer = require('multer')      // import multer

const path = require('path');        // import path 

const app = express();     // inite express

app.use(express.json())

const url = 'mongodb://localhost:27017';     

const database_name = '1stapi';

const client =new MongoClient(url);

const connect = async()=>{

    await client.connect();              //connect client 
    const db = client.db(database_name);    // connect database
    const collection = db.collection('products');     // connect colection 
    

    return collection;
}

// multer code 

const diskStorage = multer.diskStorage({

    destination: (req,res,cb)=>{

        cb(null,'./uploads');

    },
    filename: (req,res,cb)=>{

        cb(null, Math.floor(Math.random()*88888)+path.extname(file.originalname));
    }
})

const uploads = multer({storage:diskStorage}).fields([
    {
        name: 'thumbnail' ,maxCount:1
    },
    {name:'images',maxCount:10}
])


// create  route 

app.post('/insert-data',uploads, async(req,res)=>{
try {
    const data = req.body

    // insert data 

    const collection = await connect();

    if(data != ''){

        const response = await collection.insertOne(data);
   
        res.status(200).json({massege:'sucess 2310', data : response});

    }else{
        res.status(200).json({massege:'blank data in not allowed plzz inter data '})
    }

    console.log(req.body);



} catch (error) {
    console.log (error)
    res.status(500).json({massege:'interner server error'});
}

})

// reade data 

app.post('/view-data',async(req,res)=>{
    try {
        const collection =connect();
        const response =await collection.find().toArray();
        res.status(200).json({massege:' read api sucess',data: res}

        )
        
    } catch (error) {
        res.status(500).json({massege:'interner error', error:error})
        console.log(error)
    }
})

app.listen(2310, ()=>{

    console.log('server is runing on 2310 port ')
})