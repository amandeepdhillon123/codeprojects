const http = require("http")

const server = http.createServer((req,resp)=>{
   
    let path = req.url;
    // console.log(path)
    // resp.end("hii")

    if(path ==='/' || path === "/home")
    {
        resp.end("<h1>This is home page</h1>")
    }
    else if(path ==='/about' ){
        resp.end("<h1>This is about page</h1>")
    }
    else{
        resp.end("<h1>Page not found</h1>")
    }
})

server.listen(6020,"127.0.0.1",()=>{
    console.log("server has started")
})