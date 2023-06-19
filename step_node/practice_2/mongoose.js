
// const mongoose =require('mongoose')

// const main= async ()=>{
//       await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")

//       const ProductSch= new mongoose.Schema({
//         name:String
//       });

//       const Products =mongoose.model('products',ProductSch)

//       let data = new Products({name:"m8"});

//       let result= await data.save();

//       console.log(result)

// }

// main()

// console.log("amandeep"

const mongoose = require('mongoose');
let ProductSchema;

const main = async()=>{

    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")

    ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
   })

}
//    const ProductModel =mongoose.model('products',ProductSchema);

//    let data = new ProductModel(
//     {name:"m3", 
//     price: 1000,
//     brand:"samsung",
//     category:"mobile"
// })

//    let result = await data.save();

//    console.log(result)
// }
main()

const updata= async()=>{
      const ProductModel= mongoose.model('products',ProductSchema);

      let data =await ProductModel.updateOne({name:"mibile"},{$set:{name:"radhe"}})

      let result = await data.save();
      console.log(result)

    }    
updata();

