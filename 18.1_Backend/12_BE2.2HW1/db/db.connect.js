const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUri = process.env.MONGODB;

async function initializeDatabase() {
  await mongoose
    .connect(mongodbUri)
    .then(() => {
      console.log("Connected Db ");
    })
    .catch((error) => {
      throw error;
    });
}

module.exports = { initializeDatabase };
