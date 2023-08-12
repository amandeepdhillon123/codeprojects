const http = require("http");

const server = http.createServer((req,resp)=>{
    // console.log("server ")

    resp.end("<h1>hello ji kaise jho app sbhi</h1>")
})

server.listen(6010,'127.0.0.1',()=>{
    console.log("server has started")
})