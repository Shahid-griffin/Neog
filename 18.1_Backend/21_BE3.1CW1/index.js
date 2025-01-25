const express = require("express")
const app = express();          //instantiating express
require("dotenv").config();

app.get("/" ,(req,res)=>{
    res.send("Hello Express")
});

app.get("/about",(req,res)=>{
    res.send("This is about page")
})

app.get("/contact",(req,res)=>{
    res.send("this is conatact us page")
})
const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log("server is runnig on prt " , PORT);
});