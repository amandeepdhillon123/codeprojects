
const{MongoClient} =require('mongodb')

// const  MongoClient=require('mongodb').MongoClient;

// const url='mongodb://localhost:27017';


const url='mongodb://127.0.0.1:27017';

const client= new MongoClient(url);

 async function getData(){

  let result =  await client.connect();
//   console.log(result)

let db =result.db('E-c0m');

// console.log(db);
 let collection=  db.collection('products');
 let response = await collection.find({}).toArray()

 console.log(response);

}

getData();