const mongoose = require("mongoose");

const productCardSchema = new mongoose.Schema({
  title: String,
  productImgURL: String,
  starRating: Number,
  ratingCount: Number,
  reviewsCount: Number,
  description: [
    {
      type: String,
    },
  ],
  discountedPrice: Number,
  originalPrice: Number,
  discountPercent: Number,
  deliveryType: String,
  discountDaysLeft: Date,
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = ProductCard;
