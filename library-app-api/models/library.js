const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")
const schema = mongoose.Schema
(
    {
        "bookid":String,
        "bookname":String,
        "author":String,
        "price":String
    }
)
let librarymodel = mongoose.model("libraries",schema)
module.exports={librarymodel}


const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const library=require("./m")
const app = express()
app.use(cors()
)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/contact",(req,res)=>{
    res.send("welcome to my contact page")
})
app.listen(8082,()=>{
    console.log("server started")
})