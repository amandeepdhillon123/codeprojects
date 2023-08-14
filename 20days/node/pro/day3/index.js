
const fs = require("fs");
const http = require("http")
const html = fs.readFileSync("./temp/index.html","utf-8")
let productList =fs.readFileSync('./data/products.json',"utf-8")

let jsObject =JSON.parse(productList)
console.log(jsObject)


const server = http.createServer((req,resp)=>{
     const path = req.url

     if(path ==="/" , path ==="/home")
     {    
        resp.writeHead(200,{
            'Content-Type':'text/html',
            "My-Header":"custom headers"
        })
         resp.end(html.replace("{{%content%}}","this is home page"))
    //   resp.end(html)
    }
     else if(path ==="/about")
     {
        resp.writeHead(200,{
            'Content-Type':'text/html',
            "My-Header":"custom headers"
        })
         resp.end(html.replace("{{%content%}}","this is about page"))
     }
     else if(path.toLocaleLowerCase() ==="/products")
     {
        resp.writeHead(200,{
            'Content-Type':'application/json',
            "My-Header":"custom headers"
        })
        //  fs.readFile("./data/products.json","utf-8",(err,data)=>{
        //      let storeData =JSON.parse(data)
        //      console.log(storeData)
        //     resp.end(data)
        //  })

        resp.end(productList)
     }
     else{
        resp.writeHead(404,{
            'Content-Type':'text/html',
            "My-Header":"custom headers"
        })
         resp.end("page no fount")
     }
    // resp.end("hello ji")
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("server has been started")
})
