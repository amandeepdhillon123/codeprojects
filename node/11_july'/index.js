
let dbConnect = require('./data')





let main = async ()=>{

    let data = await dbConnect();

    data = await data.find().toArray()
    console.log(data)
}

main();

