const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number
  
});  

// add 
// let ProductSchema;
const saveInDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  const ProductsModel = mongoose.model("products", ProductSchema);

  let data = new ProductsModel({
    name: "m8",
    price: 1000,
    brand: "samsung",
    model: "mhsdf",
  });

  let result = await data.save();
  console.log(result);
};

// saveInDb();

// update data 

const updateInDb = async () => {
  const Product = mongoose.model("products", ProductSchema);

  let data = await Product.updateOne(
    { name: "amandeep2" },
    {
      $set: { price: 10 },
    }
  );

  console.log(data);
};

// delete data 


const deleteIndb=async ()=>{

    const Product = mongoose.model("products", ProductSchema);
    let data=await Product.deleteMany({  name: "m8"})

    console.log(data)

}

// deleteIndb()

// findindb 

const findIndb=async ()=>{

    const Product = mongoose.model("products", ProductSchema);
    let data=await Product.find()

    console.log(data)

}

findIndb();






