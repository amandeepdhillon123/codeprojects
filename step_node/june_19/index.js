const{MongoClient, GridFSBucketReadStream} = require('mongodb');

let url= "mongodb://127.0.0.1:27017"

let client = new MongoClient(url);

async function getData(){

    let result = await client.connect();

    let db= result.db('e-comm');

    let collection= db.collection("products");

    let response = await (collection.find({}).toArray())

    console.log(response)
}
  getData()