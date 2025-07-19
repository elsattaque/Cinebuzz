import "./MovieCard.css";
import { Link } from "react-router-dom";
import React from 'react';

const MovieCard = ({ movie }) => {
  const getRatingColor = (rating) => {
    if (rating >= 90) return "rating-high";
    if (rating >= 70) return "rating-medium";
    if (rating >= 50) return "rating-low";
    return "rating-very-low";
  };

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <div className="movie-content">
            <span className="movie-title-overlay">{movie.title}</span>
          </div>
          <div className={`movie-rating ${getRatingColor(movie.rating)}`}>
            {movie.rating}
          </div>
        </div>
        <h3 className="movie-title">{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
