const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB;

const initializeDatabase = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((error) => console.log("Error connected to the Databse", error));
};

module.exports = { initializeDatabase };
