const data =(req,resp)=>{
    resp.write("<h2>hello deep</h2>")
    resp.end();
}
module.exports= data