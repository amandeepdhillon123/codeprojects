
const express = require('express');

const app = express();

app.get('',(req,resp) =>{

    resp.send(`<h1>I ma home page</h1> <a href="/help"> go to help page</a> `) 
});

app.get('/help',(req,resp) =>{
       
    
  
    resp.send(  `  [{
        name:"aman",
        age:"27"
    },
    {
        name:"aman2",
        age:"255"
    } ,
    {
        name:"aman3",
        age:"27"
    }
   
]  <a href="/"> go to home page</a>`);
})





app.listen(2137)