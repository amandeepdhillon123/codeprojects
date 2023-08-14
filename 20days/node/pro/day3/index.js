
const fs = require("fs");
const http = require("http")
const html = fs.readFileSync("./temp/index.html","utf-8")

const server = http.createServer((req,resp)=>{
     const path = req.url

     if(path ==="/" , path ==="/home")
     {
         resp.end(html.replace("{{%content%}}","this is home page"))
    //   resp.end(html)
    }
     else if(path ==="/about")
     {
         resp.end(html.replace("{{%content%}}","this is about page"))
     }
     else{
         resp.end("page no fount")
     }
    // resp.end("hello ji")
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("server has been started")
})
