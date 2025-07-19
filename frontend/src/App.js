import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Film from './pages/Film';
import Don from './pages/Don';
import AjoutFilm from './pages/AjoutFilm';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Édite <code>src/App.js</code> puis sauvegarde pour voir les changements.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <Link to="/film/1">FilmTest</Link> {/* Change 1 par un ID existant */}
        <Link to="/ajouter-film">🎬 Ajouter un film</Link>
     
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/don/:id" element={<Don />} />
        <Route path="/ajouter-film" element={<AjoutFilm />} />

      </Routes>
    </Router>
  );
}

export default App;
