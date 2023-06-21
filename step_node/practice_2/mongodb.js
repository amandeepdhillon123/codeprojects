const {MongoClient} = require('mongodb');

 

let url= "mongodb://127.0.0.1:27017";

 const client= new MongoClient(url);

 async function dbConnect(){
     
     const result = await client.connect();

     const db= result.db('e-comm');

     return db.collection('products');
}
module.exports = dbConnect; 