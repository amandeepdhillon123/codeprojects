 const dbConnect= require('./mongodb')

//  read data forn mongo=db 

let main = async()=>{

    let data= await dbConnect();
      data= await data.find({}).toArray()

      console.log(data)
}

main();