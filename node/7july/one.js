const  express= require("express")

// console.log(express)
const app =express();

app.set('view engine','ejs')

app.get('/profile',(req,resp)=>{
    const user =
        {
            name:"amandeep",
            city:'xyz',
            hob:["reading","listening"]
    }
     
    

    resp.render('profile',{user})
})


app.listen(2242)






