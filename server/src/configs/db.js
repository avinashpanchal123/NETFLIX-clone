const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect(
        `mongodb+srv://avinash123:avinash123@cluster0.xjpjz.mongodb.net/netflix`
    )
}


module.exports = connect