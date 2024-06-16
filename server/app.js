const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
dotenv.config({path:'./config.env'});
require("./db/conn");
//const User = require("./model/userschema");
app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT;

const middleware = (req,res,next)=>{
    console.log(`hello i am middleware`);
    next();
}
//middleware();
// app.get("/",(req,res)=>{
//     res.send("Hello world app.js");
// })

app.get("/about",middleware,(req,res)=>{
    res.send("Hello about world");
   
})
// app.get("/contact",(req,res)=>{
//     res.send("Hello contact world");
// })
// app.get("/login",(req,res)=>{
//     res.send("Hello login world");
// })
// app.get("/signup",(req,res)=>{
//     res.send("Hello signup world");
// })
app.listen(PORT,()=>{
    console.log(`I am connected on server ${PORT}`)
})