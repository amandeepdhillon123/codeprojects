console.log("amandeep");

const path = require("path");
const fs= require("fs");
const dirPath = path.join(__dirname,"file")

for(let i=0; i<5;  i++){
    fs.writeFileSync(dirPath +"/Hello"+i+".txt","hello ji kais eho aap sbhi")
}

fs.readdir(dirPath,(err,file)=>{
    file.forEach((item)=>{
        console.log(item)
    })
})
