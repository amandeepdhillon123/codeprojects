
const http= require('http')

const data=(req,resp) =>{
    resp.write('<h1>hello ji aap kasie ho</h1>')
    resp.end()
}

http.createServer(data).listen(2201)