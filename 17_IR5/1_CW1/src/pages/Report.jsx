import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { moviesData } from "../utils/common";

const Report = () => {
  const mostWatchedMovie = moviesData.reduce((acc, curr) =>
    acc.views < curr.views ? curr : acc
  );

  const highestRatedMovie = moviesData.reduce((acc, curr) =>
    acc.rating > curr.rating ? acc : curr
  );

  const totalMovies = moviesData.length;

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>Movie Report</h2>
        <hr />
        <h3>Most Watched Movie</h3>
        {mostWatchedMovie && (
          <>
            <p>Title: {mostWatchedMovie.title}</p>
            <p>Views: {mostWatchedMovie.views}</p>
          </>
        )}
        <h3>Highest Rated Movie</h3>
        {highestRatedMovie && (
          <>
            <p>Title: {highestRatedMovie.title}</p>
            <p>Rating: {highestRatedMovie.rating}</p>
          </>
        )}

        <h3>Total Movies </h3>
        {totalMovies && <p>{totalMovies}</p>}
      </div>
      <Footer />
    </>
  );
};

export default Report;