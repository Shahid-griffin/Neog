const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const app = express();
const Movie = require("./models/movie.models");
app.use(express.json())   

initializeDatabase();
//right now i don;t need bc i will us eth postman t o make the API  call

// const newMovie = {
//   title: "ZNMD",
//   releaseYear: 2012,
//   genre: ["Action", "Fantasy"],
//   director: "Rajamouli",
//   actors: ["Ritik", "Anushka "],
//   language: "Telugu",
//   country: "India",
//   rating: 8.1,
//   plot: "A man embarks on a journey to rescue his mother from a tyrant.",
//   awards: "National Film Award",
//   posterUrl: "https://example.com/poster2.jpg",
//   trailerUrl: "https://example.com/trailer2.mp4",
// };

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const savedMovie = await movie.save();
    return  savedMovie;
  } catch (error) {
    throw error;
  }
}

//express route to get the post 

app.post("/movies",async (req,res)=>{
  try{

    //verification // validation on fromt end and backend  we can check for the key also
  const savedMovie = await createMovie(req.body)
  res.status(201).json({message : "Movie is added", movie:savedMovie})
  }catch(error){
    res.status(500).json({error:"Failed to add movie"})
  }
})

//server listen logic
const PORT  = 3000;

app.listen(PORT ,()=>{
  console.log("server is rinnning ")
})