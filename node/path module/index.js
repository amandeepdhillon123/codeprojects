const fs = require('fs');
const path = require('path');

const dirPath=path.join(__dirname) // drectory path

const dirPath1=path.join(__dirname,'files') // file path

for( i=0; i<5; i++)
{
  fs.writeFileSync(dirPath1 +`/apple${i}.txt`,`hello mr ${i}`)
}


// read directory


fs.readdir(dirPath1,(err,files) => {

  files.forEach((item)=>{
     console.log(item)
  })
})

// fs.writeFileSync("apple.txt","this is apple file ");

