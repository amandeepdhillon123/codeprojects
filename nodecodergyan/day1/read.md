
==========express js ===

<!-- basic page  -->

const page = require('express');

const app= express() ; -----excutable--

app.get('',(req,resp) =>{
    resp.send('welcome dear this is abut page');
});

app.get('/help',(req,resp) =>{
    resp.send('welcome dear this is abut page');
});

app.get('/about',(req,resp) =>{
    resp.send('welcome dear this is abut page');
});


