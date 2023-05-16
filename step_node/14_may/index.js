

// console.log("amandeepp ")
const fs= require('fs');
const path =require('path');
const dirPath= path.join(__dirname,"file")

// console.log(dirPath)

for(let i=0; i<5; i++)
{
    fs.writeFileSync(dirPath + `/hello${i}.txt`,"hello iam amandeep ")
}

fs.readdir(dirPath,(err,file) =>{

//    file.forEach((item)=>{
//     console.log(item)
//    })

for(value of file)
{
console.log(value)
}
})
