const mongoose=require("mongoose")
const schema = mongoose.Schema
(
    {
        "bookid":String,
        "bookname":String,
        "author":String,
        "price":String
    }
)
let librarymodel =mongoose.model("libraries",schema)
mongoose.model.exports={librarymodel}