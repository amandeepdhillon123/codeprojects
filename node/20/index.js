
const express= require("express")

const app =express();



require("dotenv").config()

const Port = process.env.PORT || 3000

app.use(express.json())

const routes =require("./routers/route")

app.use("/app/v1",routes)

const dbConnect= require("./config/database")
dbConnect()

app.listen(Port,()=>{
    console.log(`${Port} number successful `)
})


