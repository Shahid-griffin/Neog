const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productType: String,
  productImgURL: String,
  productInfo: String,
  colors: [
    {
      type: String,
      default: "orange",
      enum: ["blue", "red", "green", "orange", "black"],
    },
  ],
  size: [
    {
      type: Number,
      default: 9,
      enum: [7, 8, 9, 10, 11],
    },
  ],
  productPrice: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;