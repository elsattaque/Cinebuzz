import React from "react";
import "./GenreFilter.css";

const GenreFilter = ({ selectedGenre, onGenreChange }) => {
  const genres = [
    { name: "All", label: "Tous les films" },
    { name: "Horreur", label: "Horreur" },
    { name: "Thriller", label: "Thriller" },
    { name: "Amour", label: "Amour ♥" },
    { name: "Action", label: "Action" },
    { name: "Psycho", label: "Psycho" },
    { name: "Documentaire", label: "Documentaire" },
  ];

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button
          key={genre.name}
          onClick={() => onGenreChange(genre.name)}
          className={`genre-button ${
            selectedGenre === genre.name ? "genre-button-active" : ""
          }`}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
