const { initializeDatabase } = require("./db/db.connect");

const Movie = require("./models/movie.models");

initializeDatabase();


async function updateMovie(movieId,dataToUpdate){
  try{
    const updatedMovie = await Movie.findByIdAndUpdate(movieId,dataToUpdate,{new:true})
    console.log(updateMovie)
  }catch(error){
    throw error;
  }
}
updateMovie("678a393dc71e6e02a1ad9f7d",{releaseYear: 2005})