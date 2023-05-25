
const {MongoClient} = require('mongodb');

const url ='mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

// console.log(client)

async function getData(){

    let result= await client.connect();
    console.log(result)
    let db=result.db('e-comm');

    console.log(db)
    let collection=db.collection('products');
    console.log(collection)
    let response= await collection.find({}).toArray();
    console.log(response)

}

getData();