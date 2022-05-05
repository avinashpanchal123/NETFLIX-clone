const express = require("express");
const path = require("path")
const dotenv = require("dotenv");
var cors = require('cors')

// const myListController = require("./controllers/myList.controller")
const { register, login} = require("./controllers/auth.controller")

const app = express();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({
    extended: true
  }));

  app.get("/", (req, res)=>{
    res.status(200).send("hello world")
  })

  // app.use("/mylist", myListController)

dotenv.config();

app.post("/register", register);

app.post("/login", login)



module.exports = app;