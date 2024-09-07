const express = require('express')
const mongoose = require('mongoose')

const app = express()
const connect = mongoose.connect("mongodb://localhost:27017/test/SignIn")
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(()=> {
    console.log("Not Connected Succesfully");
})

const LoginSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require :true
    }
});

const collection = new mongoose.model("SignIn",LoginSchema);

app.get("/",(req,res) => {
    res.render("login");
});

module.exports = collection;