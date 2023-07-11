


const {MongoClient} = require('mongodb')



const url ='mongodb://127.0.0.1:27017';



const client = new MongoClient(url)



async function dbConnect(){
    let result = await client.connect();
    let db = result.db('e-commerce');

     return db.collection('products');

   
}

// getData().then((data)=>{

//     console.log(data.find().toArray().then((dat)=>{
//         console.log(dat)
//     }))

// })

let main = async ()=>{

    let data = await dbConnect();

    data = await data.find().toArray()
    console.log(data)
}

main();

