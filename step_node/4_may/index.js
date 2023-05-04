
const fs =  require('fs');
// const { dir } = require('npm');

const path = require('path');

const dirPath = path.join(__dirname,"file")


for( let i=0; i<5; i++)

{
     fs.writeFileSync(dirPath + "/hello" + i + ".txt" ,"hello i am acccessing element" )
}


fs.readdir(dirPath,(err,item) =>{

    console.log(item)


    // item.forEach((ele) =>{
    //   console.log(ele)
    // })

    for(let value of item) 
    {
        console.log( "file name is :",value)
        console.log("amandeep")
    }
})