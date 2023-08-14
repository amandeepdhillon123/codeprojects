
const http = require("http");

//  http.createServer((req,resp=>{
//     resp.rawListeners("hello ji kais ho")
//  })

http.createServer((req,resp)=>{
    resp.writeHead(200,{
        'Content_Type':"text/html"
    })
    resp.write(JSON.stringify({name:"amandeep",email:"ama@fmail.com"}));
    //  console.log(ram)
     resp.end();
}).listen(3000,()=>{
    console.log("server has been started")
})