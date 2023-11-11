
const categorydb = require("../../model/product/productCategory");
const productsdb = require("../../model/product/productModel")
const clodinary = require("../../Cloudinary/cloudinary")


// -------------->>>>>>> add category controller  <<<<<<<----------

    exports.AddCategory = async (req, res) => {
    try {
        // console.log(req.body);
        //  fetch data from req body
        const { categoryname, description } = req.body;

        // check all data provided or not
        if (!categoryname || !description) {
        res.status(400).json({
            success: false,
            message: "all fields are required",
        });
        }

        // check category is exist or not

        const existcategory = await categorydb.findOne({
        categoryname: categoryname,
        });

        if (existcategory) {
        res.status(400).json({
            success: false,
            message: "This category Already exist",
        });
        }
        // enrty into db

        const addCategory = new categorydb({
        categoryname,
        description,
        });
        await addCategory.save();

        // send resoisne successful
        res.status(200).json({
        success: true,
        message: " category added successfully",
        addCategory,
        });
    } catch (error) {
        // Handle any errors that may occur during the process
        return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
        });
    }
    };

//  ---------------------------->>>>>>>>>>>>>>> get category <<<<<<<<<<<<<----------------------------------

    exports.getCategory =async(req,res)=>{
    try {
        const getAllCategory = await categorydb.find({});
        console.log(getAllCategory)

        res.status(200).json(getAllCategory)
        
    } catch (error) {
        // Handle any errors that may occur during the process
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
            });
      }
    }


// -------------------->>>>>>>> Add product <<<<<<<<<-------------

  exports.AddProduct = async(req,res) =>{
     try {
        // console.log(req.body)
        // console.log(req.file)
        // console.log(req.query.categoryid)

        // fetch data from req body 
          const {categoryid} =req.query;
           
           const{productname,price,discount,quantity,description} = req.body;

        // check all data provide or not
        if(!productname || !price || !discount || !quantity || !description || !req.file){
            res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        // product image fetch 
        const file = req.file?.path;

        // upload to cloudinary
           async function uploadToCloudinary(file,folder){
             const options ={folder}

             return await clodinary.uploader.upload(file,options)
           }

           const upload =await uploadToCloudinary( file, "fashion/products_image")
        
           // check product exist or not
           const existingProduct = await productsdb.findOne({productname:productname})
           
           if(existingProduct){
            res.status(400).json({
                success:false,
                message:"This product is already exist"
            })
           }

        // if not then entry inot data base
            const addProduct =new productsdb({
                productname,
                price,
                discount,
                quantity,
                description,
                categoryid,
                productimage:upload.secure_url
            })
         await addProduct.save();
        
        // send response
         res.status(200).json({
            success:true,
            message:"Add product successfully",
            addProduct
         })
        
     } catch (error) {
        // Handle any errors that may occur during the process
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
            });
      }
     
    }

// ------------>>> get all product, pagination, filter  <<<<<<<-------------------

exports.getAllProducts =async(req,res)=>{
    try {
        const page =req.query.page || 1;
        // console.log("page",page)
        const ITEM_PER_PAGE =8;
        
        // filer funtionality
        const categoryid = req.query.categoryid || "";
        const query ={};

        if(categoryid !== "all" && categoryid){
            query.categoryid = categoryid
        }

        //  how many products skipped
        const skip =(page - 1) * ITEM_PER_PAGE
       
        // product count
        const productCount= await productsdb.countDocuments(query);
        // console.log(productCount)
        
        // count page
        const pageCount = Math.ceil(productCount/ITEM_PER_PAGE);
        // console.log(pageCount)

        // get all products 
        const getAllProducts = await productsdb.find(query)
        .limit(ITEM_PER_PAGE)
        .skip(skip)

        // console.log(getAllProducts)

        res.status(200).json({getAllProducts,
          Pagination:{
            total_Products : productCount,
            page_Count : pageCount
          }
        })
    } catch (error) {
          // Handle any errors that may occur during the process
          return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
            });
      }
    }


    // --------------------------->>>>>> get single product controller <<<<<<<<------------------
    
    exports.getSingleProduct =async(req,res)=>{
       try {
        //    fetch data from params
         const{productid} = req.params;
        
        //  get data
        const getSingleProductdate = await productsdb.findOne({_id:productid});
        
        res.status(200).json(getSingleProductdate)
       } catch (error) {
           // Handle any errors that may occur during the process
           return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
            });
       }
    }

// ---------------->>>> getLatestProduct controller  <<<<<<<--------------

exports.getLatestProducts= async(req,res)=>{
   try {
        //  get new product 
        const getNewProducts = await productsdb.find().sort({_id:-1})
        
        // send response 
        res.status(200).json(getNewProducts)
   } catch (error) {
       // Handle any errors that may occur during the process
       return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
        });
   }
}

// ------------------>>>> delete product controller <<<<<-----------------------


// DeleteProducts
exports.DeleteProduct = async(req,res)=>{
    const {productid} = req.params;
    try {
        const deleteProduct = await productsdb.findByIdAndDelete({_id:productid});
        res.status(200).json(deleteProduct);
    } catch (error) {
       // Handle any errors that may occur during the process
       return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
        });
        
    }
}