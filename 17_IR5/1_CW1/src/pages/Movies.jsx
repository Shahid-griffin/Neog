import React, { useState } from "react";

import { moviesData } from "../utils/common";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Movies = () => {
  const [genre, setGenre] = useState("All");

  const movie =
    genre === "All"
      ? moviesData
      : moviesData.filter((movie) => movie.genre === genre);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>List of Movies</h2>
        <div className="py-4">
          <label htmlFor="genreFilter">Filter By Genre: </label>
          <select
            id="genreFilter"
            className="form-select"
            onChange={(e) => setGenre(e.target.value)}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Action</option>
          </select>
        </div>
        <div>
          <ul className="list-group">
            {movie.map((movie) => (
              <li key={movie.id} className="list-group-item py-2">
                <h4>{movie.title}</h4>
                <p>Genre: {movie.genre}</p>
                <p>Director: {movie.director}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Movies;