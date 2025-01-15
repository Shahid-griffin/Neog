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
          "Other",
        ],
      },
    ],
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
    },
    websiteURL: {
      type: String,
    },
    openingYear: {
      type: Number,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    specialDishes: [
      {
        type: String,
      },
    ],
    photoUrls: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;