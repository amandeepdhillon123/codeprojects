
const cartdb = require("../../model/carts/cartsModel");
const productdb = require("../../model/product/productModel")

exports.AddtoCart =async(req,res) =>{
    try {
        //  console.log(req.params)
        // extract data from req params
         const { id} = req.params;

        // find product 
        const productfind = await productdb.findOne({_id:id});

        // check item in cart exist or not
        const carts = await cartdb.findOne({userid:req.userId, productid:productfind._id})
        
        // if not then add
        if(carts?.quantity >= 1){
            // addd to cart
            carts.quantity = carts.quantity + 1
            await carts.save();

             // send response
            res.status(200).json({message:"Product Sucessfully Increment In your cart" })
        }
        else{
            const addtocart = new cartdb({
                userid: req.userId,
                productid: productfind._id,
                quantity: 1
            });
            await addtocart.save();
            res.status(200).json({ message: "Product Sucessfully Added In your cart" });
        }
       
        // decrement in product quantity
       
    } catch (error) {
        res.status(400).json(error)
    }
}