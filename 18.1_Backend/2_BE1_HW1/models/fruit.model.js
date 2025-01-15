const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: String,
  description: String,
  imgURL: String,
  calories: Number,
  carbohydrates: Number,
  protein: Number,
  fat: Number,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;