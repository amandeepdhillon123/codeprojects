// console.log("amamndeep")

const http = require('http');

http.createServer((req,resp)=>{
//    resp.write("hello  i am amandeep dhillon")

   resp.write( "<h1>Hello  Ig am Amandeep Dhillon</h1>")
   resp.end()
}).listen(2233)
