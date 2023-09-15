const express= require("express")
require("dotenv").config();
const app= express();

app.use(express.json());

const PORT= process.env.PORT || 4000

const db= require("./config/database")
db.dbConnect();

const routes= require("./routes/route")

app.use('/api/v1',routes)

app.listen(PORT,()=>{
    console.log(`server starts at PORT no ${PORT}`)
})
