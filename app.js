const express =require("express")
const mongoose =require("mongoose")
const cors = require("cors")
const library=require("./model/libarary")
const app =express()
app.use(cors()

)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/contact",(req,res)=>{
    res.send("welcome")
})
app.listen(8082,()=>{
    console.log("server started")
})

