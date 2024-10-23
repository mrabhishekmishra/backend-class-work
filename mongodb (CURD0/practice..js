const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const database_name = 'practice';

const client =  new MongoClient(url);

const connect = async()=>{

    awaitclient.connect()

    const db = client.db(database_name);

    const collection = db.collection('user');

    return collection;
}

//insert query 

const insert = async()=>{

    const collection = await connect();

    const data = {
        name : 'abhishek',
        age  : '25',
        contact : '8948442561'
    }
    
    const response = await collection.insertOne(data);
    console.log(response)
}

insert();