
const express = require('express');

const app = express();

app.get('',(req,resp) =>{

    resp.send("<h1>my name is mandeep</h1>")
})
app.get('/about',(req,resp) =>{
     
    resp.send(`<input type="text" placeholder=" username" id ="input" />
    <button>click me</button>
     <a href="/help"> go to help pagre</a>

    
    
    
    `)
})
app.get('/help',(req,resp) =>{
//   jsondata will be rdndered

    resp.send([
        {
            nsme:"amandeep",
            password:12365,
            gmail:"amandeep@gmail.com"
        },
        {
            nsme:"amandeep",
            password:12365,
            gmail:"amandeep@gmail.com"
        },
        {
            nsme:"amandeep",
            password:12365,
            gmail:"amandeep@gmail.com"
        }


    ]
       
    
    )
})

app.listen(2128);