import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Film from './pages/Film';
import Don from './pages/Don'; 
import MovieCardDetails from './Components/MovieCardDetails';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCardDetails />
        <br />
        <Link to="/film">FilmTest</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/don" element={<Don />} />
      </Routes>
    </Router>
  );
}

export default App;
