require("dotenv").config();
const mongoose = require("mongoose");

const { MongoClient } = require("mongodb");

const mongoURI =
  process.env.MONGODB_URL ||"mongodb+srv://neoGStudent:shahid@neog.j0rav.mongodb.net/?retryWrites=true&w=majority&appName=neoG";
const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", err);
  }
};

module.exports = { initializeDatabase };