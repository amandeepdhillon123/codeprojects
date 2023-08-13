

const fs = require("fs");

const http = require("http");

const address = fs.readFileSync("./index.html","utf-8");
console.log(address)

const server = http.createServer((req,resp)=>{
     
    let path = req.url;

    if(path === '/' || path === "/home")
    {
          resp.writeHead(200,{
            "Content-Type" :"text/html",
             "my-Header" :" hello world"
          })
        resp.end(address.replace('{{%CONTENT%}}',"this is home page"))
    }
    
    else if( path === "/about")
    {
        resp.writeHead(200,{
            "Content-Type" :"text/html",
             "my-Header" :" hello world"
          })
        resp.end(address.replace('{{%CONTENT%}}','this is about page'))
    }else{
        resp.writeHead(404,{
       
             "my-Header" :" hello world"
          })
        resp.end(address.replace('{{%CONTENT%}}',"page not found"))
    }

 
}) 

server.listen(6010,"127.0.0.1",()=>{
    console.log("server chl gya bhai");
})