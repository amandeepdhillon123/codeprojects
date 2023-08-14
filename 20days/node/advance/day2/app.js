
const fs = require('fs')
let data = process.argv;

// console.log(data)

if( data [2] == 'add')
{
    fs.writeFileSync(data[3],data[4])
}
else if( data [2] == 'add')
{
    fs.writeFileSync(data[3],data[4])
}
else{
    console.log("invalid input")
}

