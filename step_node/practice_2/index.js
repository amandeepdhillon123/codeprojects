 const dbConnect= require('./mongodb')

//  read data forn mongo=db 

// let main = async()=>{

//     let data= await dbConnect();
//       data= await data.find({}).toArray()

//       console.log(data)
// }

// main();

 
//  insertdata  from mongodb

  let  insert = async ()=>{
     
    let data = await dbConnect();
    // console.log(data)
    data = await data.insertOne({name:"rohit", age:"67"})
     console.log(data)
  }

  insert();