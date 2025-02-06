const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const app = express();
const Movie = require("./models/movie.models");
app.use(express.json())   

initializeDatabase();
const deleteMovieById = async (movieId) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    return deletedMovie;
  } catch (error) {
    throw error;
  }
};

// DELETE API Route
app.delete("/movies/:id", async (req, res) => {
  try {
    const deletedMovie = await deleteMovieById(req.params.id);
    res.status(201).json({ message: "Movie Deleted", movie: deletedMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

//server listen logic
const PORT  = 3000;

app.listen(PORT ,()=>{
  console.log("server is rinnning ")
})

