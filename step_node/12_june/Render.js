const express= require('express')
  
const app=express();
//   console.log(app)
app.listen(2223)

app.get('',(req,resp)=>{

  resp.send(`<h1>home page</h1> <a href="/about"/>about</a>   <a href="/listen"/>listen</a>`)
})


app.get('/about',(req,resp)=>{

  resp.send(`<h1>about page</h1>   `)
})

app.get('/listen',(req,resp)=>{

  resp.send([{
    name:"anil",
    surName:"dhillon"
  },
  {
    name:"anil",
    surName:"dhillon"
  }
])
})