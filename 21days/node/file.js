
const fs   = require('fs');

const path = require('path');

const dirPath = path.join(__dirname,"File")

// console.log(dirPath)

for( var i=0; i<5; i++)
{
    fs.writeFileSync(dirPath + "/hello" + i + ".txt" ,"hello jii")
}

fs.readdir(dirPath,(err,file)=>{
    file.forEach(item => console.log(item))
})

