
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: {
      type: [String],
      enum: [
        "Action",
        "Comedy",
        "Drama",
        "Thriller",
        "Sci-Fi",
        "Horror",
        "Fantasy",
        "Sports",
        "Musical",
        "Romance",
        "other",
      ],
      required: true,
    },
    director: { type: String, required: true },
    actors: [String],
    language: { type: String, required: true },
    country: { type: String, required: true },
    rating: { type: Number, required: true },
    plot: { type: String, required: true },
    awards: [String],
    posterUrl: { type: String },
    trailerUrl: { type: String },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
