

console.log("amandeep")

const fs= require('fs');
//  console.log(process.argv)
let input = process.argv;


if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]== 'remove')
{
     fs.unlinkSync(input[3])
}
 else{
    console.log("input valid")
 }

