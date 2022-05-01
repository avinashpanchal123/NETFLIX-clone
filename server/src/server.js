const app = require("./index");

const connect = require("./configs/db")

const port = process.env.PORT || 5000;

const start = async()=>{
    await connect()
    app.listen(port, ()=>{
        console.log("listening on port 5000")
    })
}

start()