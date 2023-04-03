
const fs= require('fs')

const path = require('path');

const dirPath = path.join(__dirname,"file")

console.log(dirPath);

for(let i=0; i<5; i++)
{
    fs.writeFileSync(dirPath + `/hello ${i}.txt`,"hello ram")

    fs.readdir(dirPath,(err,file) =>{
   file.forEach(( ele) => {
      console.log(ele)
   })
    })
}