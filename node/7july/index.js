// console.log("amamndeep")

// const http = require('http');

// http.createServer((req,resp)=>{
// //    resp.write("hello  i am amandeep dhillon")

//    resp.write( "<h1>Hello  Ig am Amandeep Dhillon</h1>")
//    resp.end()
// }).listen(2233)

// sim[pple api 

// console.log("amambndeep")

// const http = require('http');
//  const data = require('./data')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type' :'application/Json'})
//     resp.write(JSON.stringify(data))
   

// }).listen(2239)

 const fs = require('fs');
 const path= require('path');

 const filepath = path.join(__dirname,"File")

//  console.log(filepath)


        for( var i=0; i<5; i++)
        {git 
           fs.writeFileSync(filepath + "/Hello"+ i +".txt","hello i am amandeep") 
        }

        fs.readdir(filepath,(err,files)=>{
            files.forEach((item)=>{
              console.log(item)
            })
        })




