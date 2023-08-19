
const fs= require("fs");
const http = require("http");
const html= fs.readFileSync('./file/index.html',"utf-8")
const PORT = 5500
const url =require("url")
// console.log(url)

let products = JSON.parse(fs.readFileSync("./data/product.json","utf-8"))
// console.log(products)

let productList = fs.readFileSync("./file/productList.html","utf-8")
 

let productHtml =products.map((ele)=>{
    let output = productList.replace("{{%name%}}",ele.name)
    
    output =output.replace("{{%username%}}",ele.username)
    output =output.replace("{{%email%}}",ele.email)
    output =output.replace("{{%phone%}}",ele.phone)
    output =output.replace("{{%website%}}",ele.website)
    output =output.replace("{{%ID%}}",ele.id)
    return output
})

http.createServer((req,resp)=>{

        let {query,pathname:path} = url.parse(req.url,true)
        console.log(query.id,path)
        //    path =req.url;

     if(path ==='/' || path ==='/home')
     {
        resp.end(html.replace("{{%content%}}","this is home page"))
     }
     else if(path === "/products")
     {
        if(!query.id)
        {
           
        let response =html.replace("{{%content%}}",productHtml.join(","))
        resp.writeHead(200,{
            'Content-Type':'text/html'
        })

        resp.end(response)
        }
        else{
             resp.end(query.id)
        }

        // console.log(response)
        // console.log(productHtml.join(","))
     }
     else
     {
    resp.end("404 ! page not found")
     }
    
})
.listen(PORT,"127.0.0.1",()=>{
    console.log("sever run successful")
})
