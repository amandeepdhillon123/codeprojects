
const http = require('http');

http.createServer((req,resp) =>{

    resp.write("<h1>Hello i am amandeep</h1>");

    resp.end();
}).listen(2171)


// console.log(http)