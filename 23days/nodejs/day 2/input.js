// console.log(process.argv)

// console.log(process.argv[2])

const input= process.argv;
const fs = require("fs");
if(input[2] =="add"){
   fs.writeFileSync(input[3],input[4])
}
else if(input[2] === "remove")
{
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid input")
}