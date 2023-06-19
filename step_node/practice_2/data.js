
const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/e-comm")

const ProductSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});

// update 

// const update = async()=>{
     
//      const Product = mongoose.model('products',ProductSchema);

//      let data= await Product.updateOne(
//         {name:"mibile"},{$set :{name:"radheShyam"}})

// console.log(data)

// if(data.acknowledged)
// {
//     console.log("successful")
// }
// }

// update();


//  read data 

// const read = async() => {
    
//     let productModel= mongoose.model('products',ProductSchema);

//     let data= await productModel.findOne();

//     console.log(data)

// }

// read();

// delete 

  const del = async() =>{
         
    let productModel= mongoose.model('products',ProductSchema);
    let data= await productModel.deleteOne({name:"radheShyam"});

    console.log(data)
    
}

del()


