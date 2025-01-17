const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () =>{
await mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.log("Error connected to the Databse", error));

};

module.exports = {initializeDatabase};