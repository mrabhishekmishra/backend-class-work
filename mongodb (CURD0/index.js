const {MongoClient} = require('mongodb');  // import mongodb and destrant mongoclient

const url = 'mongodb://localhost:27017';     // url name is fix for evryone 

const dbname = 'backendstart';         // create my database name 

const client = new MongoClient(url);     

const connect = async ()=>{

    await client.connect();  // connect client
    const db = client.db(dbname)  // connect client to database 
    const collection = db.collection('user');  //create collection to database 
    
    return collection;
};

//insert query 

const insert = async()=>{

    const collection = await  connect();

    const data = {
        name: 'abhishek ',
        lastname : 'mishra',
        contact : '8948442561'
    }

    const response = await collection.insertOne(data);
    console.log(response)
}

//insert();

// // insert multipal data 

// const insert_multi = async()=>{
//     const collection = await connect();

//     const multi_data  = [
//         {
//             name : 'tinku',
//             lastname : 'mishra',
//             age: '24'
//         },
//         {
//             name : 'vinod',
//             lastname : 'mishra',
//             age: '45'
//         }
//     ]

//     const response = await collection.insertMany(multi_data);
//     console.log(response);
// }
// //insert_multi()

// // read data 

// const read = async()=>{

//     const collection = await connect();

//     const response = await collection.find().toArray();
//     console.log(response)

// }

// read();


// // delete data 


// const data_delete = async()=>{

//     const collection =await connect();

//     const response = await collection.deleteOne({name:'abhishek '});

//     console.log(response)


// }

// //data_delete()


