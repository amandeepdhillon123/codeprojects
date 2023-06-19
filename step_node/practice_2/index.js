 const dbConnect= require('./mongodb')

//  read data forn mongo=db 

// let main = async()=>{

//     let data= await dbConnect();
//       data= await data.find({}).toArray()

//       console.log(data)
// }

// main();

 
//  insertdata  from mongodb

//   let  insert = async ()=>{
     
//     let data = await dbConnect();
//     // console.log(data)
//     data = await data.insertOne({name:"rohit", age:"67"})
//      console.log(data)
//   }

//   insert();



//  uodata data in node js from db 

// let update =async()=>{

//     let data= await dbConnect();

//     data = await data.updateOne({name:"rahul"},{$set:{name :"Kuldeep"}})

//     console.log(data)

// }

// update();


// check data 

//   let check=  async ()=>{

//     let data =  await dbConnect();

//     data= await data.findOne({name:"amandeep"})

//     console.log(data)
//   }

//   check()



// delete data 

   const del = async()=>{

      let data = await dbConnect();

       data = await data.deleteOne({name:"amandeeep"})
      console.log(data)

   }

   del();
