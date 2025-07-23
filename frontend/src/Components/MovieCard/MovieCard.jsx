import "./MovieCard.css";
import { Link } from "react-router-dom";
import React from "react";

const MovieCard = ({ movie }) => {
  const getRatingColor = (rating) => {
    if (rating >= 90) return "rating-high";
    if (rating >= 70) return "rating-medium";
    if (rating >= 50) return "rating-low";
    return "rating-very-low";
  };

  // Gestion flexible selon que les films viennent de la BDD ou de moviesData
  const id = movie.Id_Film || movie.id;
  const title = movie.titre || movie.title;
  const poster = movie.affiche || movie.image;
  const rating = movie.note || movie.rating;

  console.log(poster);
  return (
    <Link to={`/movie/${id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img src={poster} alt={title} className="movie-image" />

          {rating && (
            <div className={`movie-rating ${getRatingColor(rating)}`}>
              {rating}
            </div>
          )}
        </div>
        <h3 className="movie-title">{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
