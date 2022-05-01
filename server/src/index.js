const express = require("express");
const path = require("path")
const dotenv = require("dotenv");

const { register, login} = require("./controllers/auth.controller")

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
  }));

dotenv.config();

app.post("/register", register);

app.post("/login", login)



module.exports = app;