// console.log("amandeep")

const http = require("http");
  const PORT = 4000;

http.createServer((req,resp)=>{
    
    resp.write("<h1> head tag </h1>")
    resp.end();
})
.listen(PORT,"127.0.0.1",()=>{
    console.log(`server cl gya ${PORT}`)
})

