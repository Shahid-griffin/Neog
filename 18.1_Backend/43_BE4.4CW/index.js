const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const app = express();
const Movie = require("./models/movie.models");
app.use(express.json())   

initializeDatabase();

const updateMovie = async (movieId, dataToUpdate) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    console.log("Error in updating Movie rating", error);
  }
};
app.post("/movies/:movieId", async (req, res) => {
  try {
    const updatedMovie = await updateMovie(req.params.movieId, req.body);
    if (updatedMovie) {
      res.status(200).json({ message: "Movie updated successfully." });
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "failed to update movie." });
  }
});

//server listen logic
const PORT  = 3000;

app.listen(PORT ,()=>{
  console.log("server is rinnning ")
})

