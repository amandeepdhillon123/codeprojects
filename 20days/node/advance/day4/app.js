// console.log("amandeep")

const http = require("http");
  const PORT = 4000;

http.createServer((req,resp)=>{

    const path = req.url;
    // console.log(path)

    if(path ==="/" || path ==='home'){
       resp.end("<h1>home page</h1>")
    }
    else if (path.toLocaleLowerCase() === "/about"){
            
        resp.end("<h1>about page</h1>")
    }
    else{
        resp.end(" 404! page not found")
    }
    
    
})
.listen(PORT,"127.0.0.1",()=>{
    console.log(`server cl gya ${PORT}`)
})

