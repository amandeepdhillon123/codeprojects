
const {MongoClient} = require('mongodb');

let url ="mongodb://127.0.0.1:27017";

let client = new MongoClient(url);

async function data(){
     
    let connect = await client.connect()
     
    let database = connect.db("e-commerce");

    let collection = database.collection("products")
    
    let result = await collection.find({}).toArray();
    console.log(result)
}
data()

