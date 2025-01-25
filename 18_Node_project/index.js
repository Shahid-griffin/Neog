const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const app = express();
const Movie = require("./models/movie.models");
app.use(express.json())

initializeDatabase();


//fincd movie with a title

async function readMovieByTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    return movie
  } catch (error) {
    throw error;
  }
}

app.get("/movies/:title", async(req,res)=>{
  try{
    const movie = await readMovieByTitle(req.params.title)
    if(movie){
      res.json(movie)
    }else{
      res.status(404).json({error : "Movie Not found"})
    }
  }catch(error){
      res.status(500).json({error :"Failed to fetch "})
  }
})

//to get allmovie in thedatabse

async function readAllmovie() {
  try {
    const allMovie = await Movie.find();
    console.log(allMovie);
  } catch (error) {
    throw error;
  }
}

// readAllmovie();

async function readDirector(dir) {
  try {
    const director = await Movie.findOne({ director: dir });
    console.log(director);
  } catch (error) {
    throw error;
  }
}

// readDirector("Kabir Khan")


const PORT  = 3000;

app.listen(PORT ,()=>{
  console.log("server is rinnning ")
})