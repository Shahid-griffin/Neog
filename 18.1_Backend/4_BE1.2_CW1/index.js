const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Movie = require("./models/movies.models");

initializeDatabase();

const jsonData = fs.readFileSync("movies.json", "utf-8"); // rerurn string format

const moviesData = JSON.parse(jsonData);

const seedData = () => {
  try {
    for (const movie of moviesData) {
      const newMovie = new Movie({
        title: movie.title,
        releaseYear: movie.releaseYear,
        genre: movie.genre,
        director: movie.director,
        actors: movie.actors,
        language: movie.language,
        country: movie.country,
        rating: movie.rating,
        plot: movie.plot,
        awards: movie.awards,
        posterUrl: movie.posterUrl,
        trailerUrl: movie.trailerUrl,
      });
      newMovie.save();
      console.log("Movie Data: ", newMovie.title);
    }
  } catch (error) {
    console.log(" Error seeding the data ", error);
  }
};

seedData();