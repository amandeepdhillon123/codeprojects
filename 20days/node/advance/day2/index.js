
const http = require("http");

//  http.createServer((req,resp=>{
//     resp.rawListeners("hello ji kais ho")
//  })

http.createServer((req,resp)=>{
     resp.write("hello ji kaise ho aap sbhi");
     resp.end();
}).listen(3000,()=>{
    console.log("server has been started")
})