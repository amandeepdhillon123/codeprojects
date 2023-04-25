

const fs = require('fs');

// synchronous 

let result = fs.readFileSync("demo.txt","utf-8")

console.log(result)

console.log(performance.now())


//   asynchronous 

let result1 = fs.readFile("demo.txt","utf-8",(err,txt) =>{

    console.log(txt)
}) 
console.log(performance.now())