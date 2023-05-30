const dbConnect = require("./mongodb");
  console.log(dbConnect)
const insert = async () => {

    const db = await dbConnect();


   const result= await  db.insertOne(
    [
    {
    name:"amandeep1",surName:"dhillon"
   },
   {
    name:"amandeep2",surName:"dhillon"
   },
   {
    name:"amandeep3",surName:"dhillon"
   }

])
     

//    console.log(result)
if(result.acknowledged)
{
    console.log("data is inserted ")
}

};
insert();
