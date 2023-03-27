//   const color = require("colors");
//   console.log("hello".red);

// const server= require('http');

// server.createServer((req,resp) => {
//     resp.writeHead(200,{'content- type':'application\json'});
//     resp.write(JSON.stringify({name :" aman dhillon", email:"xyz@gmail.com"}));
//     resp.end();
// }).listen(2000);

const server= require("http");

server.createServer((req,resp) => {
    resp.write("<h1>hello node js</h1>");
    resp.end()
}).listen(4500);