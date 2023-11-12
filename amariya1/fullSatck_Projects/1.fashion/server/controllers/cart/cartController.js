
const cartsdb = require("../../model/carts/cartsModel");
const productsdb = require("../../model/product/productModel")



// ------------------>>>>> Add to cart <<<<----------------

exports.AddtoCart =async(req,res) =>{
    try {
        //  console.log(req.params)
        // extract data from req params
         const { id} = req.params;

        // find product 
        const productfind = await productsdb.findOne({_id:id});

        // check item in cart exist or not
        const carts = await cartsdb.findOne({userid:req.userId, productid:productfind._id})
         // if not then add
        if(productfind?.quantity >=1){
        
        if(carts?.quantity >= 1){

        // addd to cart
        carts.quantity = carts.quantity + 1
        await carts.save();
        
        // decrement product quantity
        productfind.quantity = productfind.quantity - 1
        await productfind.save();

        // send response
            res.status(200).json({message:"Product Sucessfully Increment In your cart" })
        }
        else{
            const addtocart = new cartsdb({
                userid: req.userId,
                productid: productfind._id,
                quantity: 1
            });
            await addtocart.save();
               
            // decrement product quantity 
            productfind.quantity = productfind.quantity - 1
            await productfind.save();

            res.status(200).json({ message: "Product Sucessfully Added In your cart" });
        }
      }
       else{
        res.status(400).json({ error: "This Product Is Sold Out" });
       }
       
        // decrement in product quantity
       
    } catch (error) {
        res.status(400).json(error)
    }
}


// --------------------->>>> getcart value <<<<-------------------

exports.getCartValue =async (req,res)=>{
    try {
        console.log( req.userMainId)
       
        const getCarts = await cartsdb.aggregate([
            {
                $lookup: {
                    from: "productsmodels",
                    localField: "productid",
                    foreignField: "_id",
                    as: "productDetails"
                }
            }


        ])
        console.log(getCarts)
        res.status(200).json(getCarts) 
    } catch (error) {
        res.status(400).json(error)
    }
}

// ------------------>>>>>> remove Singleitem cartcontroller <<<<<<-----------

exports.removeSingleiteam = async (req, res) => {
    const { id } = req.params;
    try {

        const productfind = await productsdb.findOne({ _id: id });

        const carts = await cartsdb.findOne({ userid: req.userId, productid: productfind._id });

        if (!carts) {
            res.status(400).json({ error: "cart item not found" });
        }

        console.log("carts", carts)

        if (carts.quantity == 1) {
            const deleteCartItem = await cartsdb.findByIdAndDelete({ _id: carts._id });
            // console.log("deleteCartItem",deleteCartItem)

            // increment product quantity
            productfind.quantity = productfind.quantity + 1
            await productfind.save();

            res.status(200).json({ message: "YOur Iteam sucessfully remove in your cart", deleteCartItem })
        } else if (carts.quantity > 1) {
            carts.quantity = carts.quantity - 1
            await carts.save();

            // increment product quantity
            productfind.quantity = productfind.quantity + 1
            await productfind.save();

            res.status(200).json({ message: "Your Iteam Sucessfully Decrement In your Cart" });
        }

    } catch (error) {
        res.status(400).json(error)

    }
}