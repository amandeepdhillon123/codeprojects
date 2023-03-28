//  make file 

const fs = require('fs');
 const path = require('path');

 const dirPath= path.join(__dirname,'crud')

 const filepath =`${dirPath}/apple.txt`;

//  console.log(file)

// fs.writeFileSync(`${file}/aaple.txt`,'i am amandeep');

// read file 

// synchronous 
/*

console.log("start 1")

setTimeout(() =>{
    console.log("start 2")
},2000)

console.log("start 3")

*/

// drawback

/*

let a=10;
let b=0;
setTimeout(() =>{
   b= 20;
},2000)

console.log(a+b)

*/

// solution by callback and promises 

let a=10;
let b=0;


let waitingData = new Promise((resolve,reject) =>{
    setTimeout(() =>{
       
        resolve(30)
     },2000)
})

waitingData.then( (b) =>{
  console.log(a+b)
})

// call stack 

// 1. call satck
// 2. node Api
// 3.call abck queue






