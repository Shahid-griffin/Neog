const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: [
      {
        type: String,
        enum: [
          "Italian",
          "Mexican",
          "Chinese",
          "Indian",
          "American",
          "French",
          "Japanese",
          "Mediterranean",
          "Thai",
          "Vegetarian",
          "Vegan",
          "Greek",
          "Spanish",
          "Other",
        ],
      },
    ],
    location: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    openHours: {
      type: String,
    },
    website: {
      type: String,
    },
    priceRange: {
      type: String,
      enum: ["$ (0-10)", "$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
    },
    reservationsNeeded: {
      type: Boolean,
      default: false,
    },
    isDeliveryAvailable: {
      type: Boolean,
      default: false,
    },
    menuUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: [
      {
        type: String,
      },
    ],
    specialDishes: [
      {
        type: String,
      },
    ],
    photos: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;
