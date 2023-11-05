const categorydb = require("../../model/product/productCategoryModel")
const productsdb = require("../../model/product/productModel")
const cloudinary = require("../../Cloudinary/cloudinary")

// add category
exports.AddCategory = async(req,res)=>{
    const {categoryname,description} = req.body;

    if(!categoryname || !description){
        res.status(400).json({error:"Fill All Details"})
    }

    try {
        const existingcategory = await categorydb.findOne({categoryname:categoryname});

        if(existingcategory){
            res.status(400).json({error:"This Category Already Exist"});
        }else{
            const addCategory = new categorydb({
               categoryname,description
            });

            await addCategory.save();

            res.status(200).json(addCategory)
        }
    } catch (error) {
        res.status(400).json(error)
    }

}

// GetCategory
exports.GetCategory = async(req,res)=>{
    try {
        const getAllcategory = await categorydb.find();
        res.status(200).json(getAllcategory)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


// AddProducts
exports.AddProducts = async(req,res)=>{
    const {categoryid} = req.query;
    const file = req.file ? req.file.path :""
    const {productname,price,discount,quantity,description} = req.body;

    if(!productname || !price || !discount || !quantity || !description || !file){
        res.status(400).json({error:"all filed required"});
    }

    try {
         // cloudinary setup
    async function uploadCcloudainry(file, folder) {
        options = { folder };
  
        return await cloudinary.uploader.upload(file, options);
      }
      const response = await uploadCcloudainry(file, "fashionproducts");

        const existingProduct = await productsdb.findOne({productname:productname});

        if(existingProduct){
            res.status(400).json({error:"THis Product Already Exist"});
        }else{
            const addProduct = new productsdb({
                productname,price,discount,quantity,description,categoryid,productimage:response.secure_url
            });

            await addProduct.save();
            res.status(200).json(addProduct)
        }
    } catch (error) {
        res.status(400).json(
            {
                error:error.message
            }
        );
    }
}


// get all products

exports.getAllProducts = async(req,res)=>{

    const categoryid = req.query.categoryid || ""
    const page = req.query.page || 1;
    const ITEM_PER_PAGE = 8;

    const query = {}

    if(categoryid !== "all" && categoryid){
        query.categoryid = categoryid
    }

    
    try {

        const skip = (page - 1) * ITEM_PER_PAGE // (3 - 1) * 8 = 8

        // product count
        const count = await productsdb.countDocuments(query);
        // console.log("count",count)


        const getAllProducts = await productsdb.find(query)
        .limit(ITEM_PER_PAGE)
        .skip(skip);

        const pageCount = Math.ceil(count/ITEM_PER_PAGE); // 2/8 = 1/4 = 0.25 = 1 
    
        
        res.status(200).json({getAllProducts,
            Pagination:{
                totalProducts:count,pageCount
            }
        })
    } catch (error) {
        res.status(400).json(error);
        
    }
}


// getSingleProduct
exports.getSingleProduct = async(req,res)=>{
    const {productid} = req.params;

    try {
        const getSingleProductdata = await productsdb.findOne({_id:productid});
        res.status(200).json(getSingleProductdata)
    } catch (error) {
        res.status(400).json(error);
        
    }
}

// getLatestProducts
exports.getLatestProducts = async(req,res)=>{
    try {
        const getNewProducts = await productsdb.find()
        .sort({_id:-1});
        res.status(200).json(getNewProducts)
    } catch (error) {
        res.status(400).json(error);
    }
}

// DeleteProducts
exports.DeleteProducts = async(req,res)=>{
    const {productid} = req.params;
    try {
        const deleteProducts = await productsdb.findByIdAndDelete({_id:productid});
        res.status(200).json(deleteProducts);
    } catch (error) {
        res.status(400).json(error);
        
    }
}