//  const http = require("http");
// const data = require("./data")
// //  http.createServer((req,resp)=>{
// //     resp.write("<h1>hello jii</h1>");
// //     resp.end();
// //  }).listen(4500);

// //  http.createServer(data).listen(4700)

// function dataControl(req,resp) {
//     resp.write("<h1>hello dosto</h1>")
//     resp.end();
// }

//  http.createServer(dataControl).listen(4710)


const http = require("http");
const data = require('./data')
http.createServer((req,resp)=>{
   resp.writeHead(200,{'Content-type' :'application\json'})
   resp.write(JSON.stringify(data))
   resp.end()
}).listen(2106)