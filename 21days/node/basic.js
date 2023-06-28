const http= require('http');
   const data = require('./data')



// console.log(http)

// http.createServer((req,resp)=>{
//     resp.write("hello i am amandeep");
//     resp.end()
// }).listen(2279)

http.createServer(data).listen(2281)

