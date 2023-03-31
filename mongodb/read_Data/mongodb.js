const {MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017';

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
//   fucntion will be common for every profile 

async function dataConnect() {
  let result = await client.connect();
  let db = result.db("E-c0m");
   return db.collection('products')

}

module.exports=dataConnect