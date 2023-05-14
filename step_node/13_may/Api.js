  

  const data = require('./data')

const http= require('http');

// console.log(http)


  http.createServer((req,resp) =>{

    resp.writeHead(200,{"content-type" : "application/Json"})

    // resp.write(JSON.stringify([{name:"amandeep", email:"amandeep@gmail.com"},{name:"amandeep", email:"amandeep@gmail.com"}]))


     resp.write(JSON.stringify(data))
    resp.end();
  }).listen(2174)