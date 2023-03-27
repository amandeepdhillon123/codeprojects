
const http = require('http');
const data = require('./data')
// const { json } = require('stream/consumers');

// console.log(http)

http.createServer((req,resp) =>{
 resp.writeHead(200,{'content-Typet':'application\json'});
 resp.write(JSON.stringify(data));

 resp.end();

}).listen(2120);
