const { initializeDatabase } = require("./db/db.connect");

const Movie = require("./models/movie.models");

initializeDatabase();


async function updateMovie(movieId,dataToUpdate){
  try{
    const updatedMovie = await Movie.findByIdAndUpdate(movieId,dataToUpdate,{new:true})
    console.log(updatedMovie)
  }catch(error){
    throw error;
  }
}
// updateMovie("678a393dc71e6e02a1ad9f7d",{releaseYear: 2006})
//update the movie by searching title

async function updateMovieByTitle(movieTitle,dataToUpdate){
  try{
    const data = await Movie.findOneAndUpdate({title:movieTitle},dataToUpdate,{new:true})
    console.log(data)
  }catch(error){
    console.log("error while addign",error)
  }
}

updateMovieByTitle("Kabhi Khushi Kabhie Gham",{releaseYear:2005});