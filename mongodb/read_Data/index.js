
const dataConnect=require('./mongodb')


// dataConnect();
//   for searching variable 

//  firsdt mehtod 
/*
dataConnect().then((resp) =>{
    resp.find({}).toArray().then((data) =>{
        console.warn(data)
    })
})
*/
let main =async()=>{

    let data= await dataConnect();

    data= await data.find({}).toArray();
    console.log(data);
    
}
main();
