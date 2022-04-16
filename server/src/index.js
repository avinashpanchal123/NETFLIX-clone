const express = require("express");


const dotenv = require("dotenv");
const {OAuth2Client} = require("google-auth-library");

dotenv.config();

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);


const app = express();

app.use(express.json());

const users = [];

const upsert = (arr, item)=>{
    const i = arr.findIndex((_item)=>{
        _item.email === item.email
    });

    if( i > -1){
        arr[i] = item;
    }
    else{
        arr.push(item)
    }
}


app.get("/", (req, res)=>{
    res.send("hello server is started")
})

app.post("/api/google-login", async(req, res)=>{
    const {token} = await req.body; 
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience: process.env.CLIENT_ID
    });
    const {name, email, picture} = ticket.getPayload();
    upsert(users, {name, email, picture});

    res.status(201).json(
        {name, email, picture}
    )
})

module.exports = app;