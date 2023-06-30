 const {MongoClient, Collection} =  require("mongodb")

 let url = "mongodb://127.0.0.1:27017";

 let client = new MongoClient(url);

async function dbConnect(){
     
    let connection = await client.connect()
    
    let database = connection.db("e-commerce");

     return database.collection('products')
}

 module.exports= dbConnect;