const express =require("express")
require("dotenv").config();

const app = express();

// 1. Write a GET route "/" which sends a message "Hello, Express JS".
app.get("/",(req,res)=>{
    res.send("HEllo Express Js ")
})

// 2. Write a GET route "/products" which sends a message "Browse our products here.".

app.get("/products",(req,res)=>{
    res.send("Browse our products here.")
})

// 3. Write a GET route "/services" which sends a message "Explore our services.".
app.get("/services",(req,res)=>{
    res.send("Explore our services.")
})

// 4. Write a GET route "/faq" which sends a message "Frequently Asked Questions.".
app.get("/faq",(req,res)=>{
    res.send("Frequently Asked Questions.")
})

// 5. Write a GET route "/gallery" which sends a message "View our gallery.".
app.get("/gallery",(req,res)=>{
    res.send( "View our gallery.")
})

const PORT  = process.env.PORT || 3000;

app.listen(PORT ,()=>{
    console.log("server is runnig on prt " , PORT);
})