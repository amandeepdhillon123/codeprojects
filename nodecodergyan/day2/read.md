

app.get('',(req,resp) => {
    console.log("mandeep",req.query.name)

    app.send(`ja ho ${req.query.name}`) 
})


int hte search bar section  you have to input localhost:5000/?name=amandeep