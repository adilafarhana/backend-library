const express =require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee=require("./models/employee")

const app =express()
app.use(cors()
)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/contact",(req,res)=>
{
    res.send("welcome to my contact page")
})
app.listen(8081,()=>{
    console.log("server started")
})