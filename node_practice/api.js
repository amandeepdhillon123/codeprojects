
const http =require('http');
const data= require('./data')

console.log(data)
http.createServer((req,resp) =>{

    resp.writeHead(200,{'content-type' : 'apllicatoion\json'})
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(2143)