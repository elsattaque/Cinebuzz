import { useEffect, useState } from "react";
import GenreFilter from "../GenreFilter/GenreFilter";
import MovieGrid from "../MovieGrid/MovieGrid";
import { moviesData } from "../../Data/MoviesData";
import "./MainContent.css";
import React from "react";

const MainContent = () => {
  const [dbMovies, setDbMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/api/film")
      .then((res) => res.json())
      .then((data) => {
        console.log("Films reçus depuis la BDD:", data);
        setDbMovies(Array.isArray(data) ? data : [data]);
      })
      .catch((err) => console.error("Erreur lors du fetch:", err));
  }, []);

  // Si All => tout afficher
  if (selectedGenre === "All") {
    const allMovies = [...dbMovies, ...moviesData];
    return (
      <main className="main-content">
        <GenreFilter
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
        <MovieGrid movies={allMovies} />
      </main>
    );
  }

  // Sinon, filtrer uniquement les moviesData qui ont un genre
  const filteredHardcoded = moviesData.filter(
    (movie) => movie.genre === selectedGenre
  );

  return (
    <main className="main-content">
      <GenreFilter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <MovieGrid movies={filteredHardcoded} />
    </main>
  );
};

export default MainContent;
