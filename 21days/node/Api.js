const http= require('http')
const data = require('./data')

// console.log(http)


http.createServer((req,resp)=>{
     resp.writeHead(200,{'content-type' :'application\JSON'})
 resp.write(JSON.stringify(
    data
    
    // [
    // {namne:"amandeep", email:"aman@gmail.com"},
    // {namne:"amandeep", email:"aman@gmail.com"},
    // {namne:"amandeep", email:"aman@gmail.com"},
    // {namne:"amandeep", email:"aman@gmail.com"},
    //  {namne:"amandeep", email:"aman@gmail.com"}, {namne:"amandeep", email:"aman@gmail.com"},

    
//  ]
 ))
 resp.end()

}).listen(2282)