const mongoose = require("mongoose")
const schema = mongoose.Schema
(
    {
        "empid":String,
        "const":String,
        "dob":String,
        "empemail":String
    }
)
let employeemodel = mongoose.model("employees",schema)
module.exports={employeemodel}