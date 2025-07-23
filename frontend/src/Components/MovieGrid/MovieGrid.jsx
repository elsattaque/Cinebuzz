import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import React from "react";

const MovieGrid = ({ movies }) => {
  //placeholders pour remplir la grille
  const placeholders = Array(5).fill(null);

  return (
    <div className="movie-grid-container">
      {/* Première rangée avec les films */}
      <div className="movie-grid">
        {movies.slice(0, 5).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Deuxième rangée avec les films */}
      <div className="movie-grid">
        {movies.slice(5, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Troisième rangée avec des placeholders */}
      <div className="movie-grid">
        {placeholders.map((_, index) => (
          <div key={`placeholder-${index}`} className="movie-placeholder"></div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
