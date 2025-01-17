const { initializeDatabase } = require("./db/db.connect");

const Movie = require("./models/movie.models");

initializeDatabase();
const newMovie = {
  title: "ZNMD",
  releaseYear: 2012,
  genre: ["Action", "Fantasy"],
  director: "Rajamouli",
  actors: ["Ritik", "Anushka "],
  language: "Telugu",
  country: "India",
  rating: 8.1,
  plot: "A man embarks on a journey to rescue his mother from a tyrant.",
  awards: "National Film Award",
  posterUrl: "https://example.com/poster2.jpg",
  trailerUrl: "https://example.com/trailer2.mp4",
};

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const savedMovie = await movie.save();
    console.log("save movie is", savedMovie);
  } catch (error) {
    throw error;
  }
}

createMovie(newMovie);
