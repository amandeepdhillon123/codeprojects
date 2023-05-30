const { Module } = require('module');
const{MongoClient}=require('mongodb');

const url= 'mongodb://127.0.0.1:27017';

const client =new MongoClient(url);

async function dbConnect(){

    let result= await client.connect();

    let db=result.db('e-comm');
    return db.collection('products');

    // let response= await collection.find({name: 'amandeep'}).toArray();
    // console.log(response)
}

module.exports =dbConnect;