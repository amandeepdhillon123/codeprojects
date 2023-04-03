const http = require("http");

// http.createServer((req,resp) => {
//     resp.write("<h1> i am amandeep dhillon</h1>");
//     resp.end()
// }).listen(2140)

// function as parameters

http.createServer(name).listen(2140);

function name(req, resp) {
  resp.write("<h1> i am Amandeep dhillon</h1>");
  resp.end();
}
