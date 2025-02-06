const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const app = express();
const Movie = require("./models/movie.models");
app.use(express.json())   

initializeDatabase();


//fincd movie with a title
// below api call is shwoing what this function is returning 
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
      return allMovie;
  } catch (error) {
    throw error;
  }
}


//aPI call to read all the movie

app.get("/movies/", async(req,res)=>{
  
  try{
    const allMovie = await readAllmovie()
  if(allMovie.length !=0){
    res.json(allMovie)
  }else{
    res.status(404).json({error: "Movie not found"})
  }
}catch(error){
  res.status(500).json({error:"Failed to fetch"})
}
})
// readAllmovie();

async function readDirector(dir) {
  try {
    const director = await Movie.findOne({ director: dir });
    return director;
  } catch (error) {
    throw error;
  }
}

// readDirector("Kabir Khan") API route 
//sincewe have use another router above we have to use diff route even if i use movies/ dire 
// system will take above above to understad

app.get("/movies/director/:directorName", async (req,res)=>{
  try{
       const  directorName = await readDirector(req.params.directorName);
       if(directorName){
        res.json(directorName)
       }else{
        res.status(404).json({error :"dire not found"})
       }
  }catch(error){
    res.status(500).json({error: "Error while fetching"})
  }
})




async function readMovieByGenre(genreName) {
  try{
    const movieByGenre = await Movie.find({genre : genreName})
    return movieByGenre;
  }catch(error){
    throw error
  }
}

app.get("/movies/genre/:genreName", async(req,res)=>{
  try{
    const movie = await readMovieByGenre(req.params.genreName)
    if(movie.length > 0){
      res.json(movie)
    }else{
      res.status(404).json({error: "No movie found "})
    }
  }catch(error){
    res.status(500).json({error: "error while Fetching"})
  }
})

//server listen logic
const PORT  = 3000;

app.listen(PORT ,()=>{
  console.log("server is rinnning ")
})