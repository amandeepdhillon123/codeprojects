const dbConnect = require("./mongodb");

const delData = async () => {

    let data = await dbConnect();
    let result = await data.deleteMany({
          name:"amandeep"
    })

    console.log(result)

    if(result.acknowledged)
    {
        console.log("record deleted ")
    }
    }

   
delData();