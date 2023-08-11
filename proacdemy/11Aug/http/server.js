const fs =require("fs");

const http = require('http');
  const read =fs.readFileSync("./index.html","utf-8")
const app = http.createServer((req,resp)=>{
    // resp.end("end programme")
    resp.end(read)
    console.log(" a new request is received")
})

app.listen(8000,'127.0.0.1',()=>{
    console.log("server has been startde ")
})
