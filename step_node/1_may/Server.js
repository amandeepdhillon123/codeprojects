

const http = require('http')

// 1st way 

// http.createServer((req,resp)=>{

//     resp.write(" <h1>hello I am Basic server </h1>")

//     resp.end();
// }).listen(2165)

http.createServer(Data).listen(2165)

// 2nd way 

function Data(req,resp){
      resp.write(" <h1>hello I am Basic server 2 </h1>")

    resp.end();  
}

// http.createServer(Data).listen(2167)





