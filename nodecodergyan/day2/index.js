
const express =require('express');

const app = express();


app.get('',(req,resp) => {
  console.log("data send by browser =>>>",req.query.name)
    resp.send(`hello ${req.query.name}`);
})

app.listen(2127);

