const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },

    year: {
      type: Number,
      require: true,
    },
    bodystyle: {
      type: String,
      require: true,
    },
    fuelType: {
      type: String,
      enum: ["Gasoline", "Diesel", "Electric", "Hybrid", "Other"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic", "Other"],
      require: true,
    },
    engine: {
      type: String,
      require: true,
    },
    mileage: {
      type: Number,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    condition: {
      type: String,
      enum: ["New", "Used"],
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    photos: [
      {
        type: String,
      },
    ],
    inMarket: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Cars = mongoose.model("Cars",carSchema)

module.exports = Cars;