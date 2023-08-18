

const fs =require("fs");

const http = require("http");

const html = fs.readFileSync("./file/index.html","utf-8");
//    for products

const products = JSON.parse(fs.readFileSync("./data/product.json","utf-8"))


http.createServer((req,resp)=>{
    const path = req.url;

    if(path ==="/" || path ==="/home")
    {
        resp.end(html.replace("{{%content%}}","this is home page"))
    }
    else if( path.toLocaleLowerCase()==="/products")
    {   
        resp.writeHead(200,{
            "Content-Type":"application/json"
        })
       resp.end("<h1>product page</h1>")
    //    resp.end(products)
       console.log(products)
    }
    else{
        resp.end("404! page not found")
    }
}).listen(4500,"127.0.0.1",()=>{
    console.log("server chl gya hai")
})

