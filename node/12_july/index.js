const mongoose = require('mongoose')

// const main = async()=>{
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')

//     const productSchema = new mongoose.Schema({
//         name:String,
//         brand:String,
//         price:Number
//     })

//     const productModel = mongoose.model('products',productSchema)

//     let data = new productModel({name:"amandeep_5",brand:"dhillon",price:23323})

//     let result = await data.save();

//     console.log(result)
// }
// main()

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')

    let  productSchema = new mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    })

    // const update = async ()=>{

    //     const Product =mongoose.model("products",productSchema)

    //     let data =await Product.updateOne(
    //         {name:"amandeep_5"},
    //         {$set:{name:"Deep"}}
            
    //         )

    //         console.log(data)
    // }

    // update()

    // find data 

    // const find = async()=>{
    //     const Product =mongoose.model('products',productSchema)

    //     const data = await Product.findOne({name:"Deep"})

    //     console.log(data)
    // }

    // find()
