import { useState } from "react";
import GenreFilter from "../GenreFilter/GenreFilter";
import MovieGrid from "../MovieGrid/MovieGrid";
import { moviesData } from "../../Data/MoviesData";
import "./MainContent.css";

const MainContent = () => {
  const [selectedGenre, setSelectedGenre] = useState("Amour");

  const filteredMovies =
    selectedGenre === "All"
      ? moviesData
      : moviesData.filter((movie) => movie.genre === selectedGenre);

  return (
    <main className="main-content">
      <GenreFilter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <MovieGrid movies={filteredMovies} />
    </main>
  );
};

export default MainContent;
