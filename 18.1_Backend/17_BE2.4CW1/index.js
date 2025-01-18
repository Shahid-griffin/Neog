const { initializeDatabase } = require("./db/db.connect");

const Movie = require("./models/movie.models");

initializeDatabase();

///find move by id and delete from DB

async function deleteMovie(movieId){
  try{
    const deletedMovie  = await Movie.findByIdAndDelete(movieId);
    console.log(deletedMovie);
  }catch(error){
    throw error;
  }
}

deleteMovie("678a00b4b016bb747584b55f");

async function deleteMovie(movieTitle){
  try{
    const deletedMovie  = await Movie.findOneAndDelete(movieTitle);
    console.log(deletedMovie);
  }catch(error){
    throw error;
  }
}

deleteMovie("3 Idiots")