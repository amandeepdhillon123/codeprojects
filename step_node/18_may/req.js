module.exports = reqFilter = (req,resp,next) =>{
    // console.log('hello amandeep')
    if(!req.query.age)
    {
        resp.send("please provide age ")
    }

    else if(req.query.age <18)
    {
         resp.send("ypu can not access this page")
    }
    else{  
        next();
    }
    
}