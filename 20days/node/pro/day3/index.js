
const fs = require("fs");
const http = require("http")
const html = fs.readFileSync("./temp/index.html","utf-8")
let productList =fs.readFileSync('./data/products.json',"utf-8")

let jsObject =JSON.parse(productList)
console.log(jsObject)

let productHtml =fs.readFileSync("./products/product.html","utf-8")


 let productArray=   jsObject.map((ele)=>{
    
        let name = productHtml.replace("{{%name%}}",ele.name)
        name =name.replace("{{%username%}}",ele.username)
        name =name.replace("{{%email%}}",ele.email)
        name =name.replace("{{%phone%}}",ele.phone)
        name =name.replace("{{%website%}}",ele.website)
       
       return name
    })
  


const server = http.createServer((req,resp)=>{
     const path = req.url

     if(path ==="/" , path ==="/home")
     {    
        resp.writeHead(200,{
            'Content-Type':'text/html',
            "My-Header":"custom headers"
        })
         resp.end(html.replace("{{%content%}}","you ara in home oage"))
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
        let response = html.replace("{{%content%}}",productArray.join(','))
        resp.writeHead(200,{
            // 'Content-Type':'application/json',
            'Content-Type':'text/html'
            // "My-Header":"custom headers"
        })
        //  fs.readFile("./data/products.json","utf-8",(err,data)=>{
        //      let storeData =JSON.parse(data)
        //      console.log(storeData)
        //     resp.end(data)
        //  })

        // resp.end(productList)
        // resp.end(productArray)
        resp.end(response)
        console.log(productArray.join(","))
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
