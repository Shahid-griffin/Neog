import React from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../utils/common";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MovieDetails = () => {
  const movieId = useParams();

  const movie = moviesData.find((movie) => movie.id == movieId.movieId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{movie.title}</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Title: </b>
            {movie.title}
          </li>
          <li className="list-group-item">
            <b>Genre: </b>
            {movie.genre}
          </li>
          <li className="list-group-item">
            <b>Director: </b>
            {movie.director}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;