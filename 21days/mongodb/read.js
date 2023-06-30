  
  const dbConnect = require('./base')


//   read data 
//   let main = async()=>{

//     let data = await dbConnect();

//     data = await data.find({}).toArray();
//     console.log(data)
//   }
//   main();

//   iunsert data 

  
// let insert = async ()=>{
    
//       let data = await dbConnect();

//       data = await data.insertOne({
//         name:"noki40",
//         brand:"nokia",
//         price:23524,
//         category :"mobile"
//       })

//       console.log(data)
// }

// insert();


let updata = async ()=>{

    let data = await dbConnect();

    data = await data.updateOne({name:"noki40"},
    {$set:{name:"nokia new"}})
}

updata();

