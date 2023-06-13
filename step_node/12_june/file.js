
const fs= require('fs');

const path = require('path')

const dirPath= path.join(__dirname,"File")
 for(let i =0; i< 5; i++)
 {
    fs.writeFileSync(dirPath+ "/Hello"+ i +'.txt',"hello amandeep")
 }

fs.readdir(dirPath,(err,File)=>{
    File.forEach((item)=>{
        console.log(item)



    })
})


  