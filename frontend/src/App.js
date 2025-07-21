import { Routes, Route } from 'react-router-dom';
import './App.css';
import Film from './pages/Film';
import Don from './pages/Don'; 
import MovieCardDetails from './Components/MovieCardDetails.jsx';
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Header from "./Components/Header/Header.jsx";
import MainContent from "./Components/MainContent/MainContent.jsx";
import UserProfile from "./Components/UserProfile.js";
import AjoutFilm from './pages/AjoutFilm'; 
import "./App.css";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/movie/:id" element={<MovieCardDetails />} />
          <Route path="/film/:filmId" element={<Film />} />
          <Route path="/don/:id" element={<Don />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/ajouter-film" element={<AjoutFilm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
