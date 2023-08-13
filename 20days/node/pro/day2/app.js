

const fs = require("fs");

const http = require("http");

let ram = JSON.parse(fs.readFileSync("./data/data,.json","utf-8"))

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
    }

    else if( path.toLocaleLowerCase() === "/products")
    {
        resp.writeHead(200,{
            "Content-Type" :"application/json",
             "my-Header" :" hello world"
          })

        //   fs.readFile("./data/data,.json","utf-8",(err,data)=>{
        //     let product =JSON.parse(data)
        //     resp.end(data)
        //     console.log(product)
        //   })

        resp.end("you are in product page")
        console.log(ram)
     
    }
    else{
        resp.writeHead(404,{
       
             "my-Header" :" hello world"
          })
        resp.end(address.replace('{{%CONTENT%}}',"page not found"))
    }

 
}) 

server.listen(6013,"127.0.0.1",()=>{
    console.log("server chl gya bhai");
})