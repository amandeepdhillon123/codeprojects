

// file base module 
// const a = 402;

// module.exports =a;

// const a = {
//     average:(b,c) =>{
//         console.log((b+c) /2);
//     },
//     percentage:(b,c) =>{
//         console.log((b/c) *100);
//     }

// }
// module.exports =a;



// build base module 

// file system 

//  const fs= require("fs");
//  const{readFileSync}=require("fs");

//  console.log(fs)

// fs.readFile("./sample.txt",'utf-8',(err,data) =>{
//     if(err){
//         return err;
//     }
//     console.log(data);
// })

// aynchronous fbehaviour

// console.log(" iam first ");

// synchromous beahviour 

// const a=fs.readFileSync("./sample.txt",'utf-8');
// console.log(a);

// console.log(" iam first ");

const http = require("http");

const server = http.createServer((request,res) => {

     
    res.end("workimg");

});

server.listen(2000,"localhost",() =>{
     console .log("server is working on http://localhost:2000)")
});

















