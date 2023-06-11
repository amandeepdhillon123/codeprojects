const http = require('http')

// console.log(http)

http.createServer((req,resp)=>{
    resp.writeHead(200,`content-type : application\json`)
    resp.write(JSON.stringify([{name:"amandeep", email:"amandeep@gamil.com"},{name:"amandeep", email:"amandeep@gamil.com"},{name:"amandeep", email:"amandeep@gamil.com"}]))
    resp.end()
}).listen(2202)