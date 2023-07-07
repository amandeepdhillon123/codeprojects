const  express= require("express")

// console.log(express)
const app =express();
const path = require('path')

const dirPath = path.join(__dirname,"File")

// app.use(express.static(dirPath))
app.listen(2241)

app.get("/jai",(req,resp)=>{
    resp.sendFile(`${dirPath}/index.html`)
})

app.get("/ja",(req,resp)=>{
    resp.sendFile(`${dirPath}/about.html`)
})
app.get("*",(req,resp)=>{
    resp.sendFile(`${dirPath}/ram.html`)
})


// app.get("/jai",(req,resp) =>{
//     // resp.send("hello i am amandeep")

//     // resp.sendfile(" <h1>hello i am amandeep</h1>  ")
// })

// app.get("/about",(req,resp) =>{
//     // resp.send("hello i am amandeep")

//     resp.send(`<h1>hello i am about page ${req.query.name}  <a href="/simple"> Simple page</a> </h1>`   )
// })

// app.get("/simple",(req,resp) =>{
//     // resp.send("hello i am amandeep")

//     resp.send(" <h1>hello i am simple page</h1>  ")
// })

