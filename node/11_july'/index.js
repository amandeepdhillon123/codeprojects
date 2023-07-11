
let dbConnect = require('./data')



//   read data 

// let main = async ()=>{

//     let data = await dbConnect();

//     data = await data.find().toArray()
//     console.log(data)
// }

// main();

// insert data 


// let insert = async() => {
//         let data = await dbConnect();

//         data = await data.insertOne({name:"amandeep_4",brand:"nokia",price:"100000"})

//         console.log(data)
// }
// insert()


//  update data 

// let update = async() => {
//         let data = await dbConnect();

//         data = await data.updateOne({name:"amandeep_4"},{$set:{name:"Dhillon"}})

//         console.log(data)
// }
// update()


let del = async() => {
        let data = await dbConnect();

        data = await data.deleteOne({name:"amandeep_3"})

        console.log(data)
}

del();



