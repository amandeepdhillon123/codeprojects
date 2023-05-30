const dbConnect = require("./mongodb");

const update = async () => {

    let data = await dbConnect();
    let result = await data.updateOne(
        {  name: "amandeep1"},{
            $set:{ name: "rahul1",  price: 3435}
        }
       
        
        
        )
        console.log(result)




     



};
update();