
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MovieCardDetails from './Components/MovieCardDetails';
import UserProfile from './Components/UserProfile';
import RealisateurDetails from './Components/RealisateurDetails';

function App() {
  return (
      <div className="App">
        <Routes>
          {/* Route dynamique qui passe l'id en paramètre */}
          <Route path="/film/:id" element={<MovieCardDetails />} />
          <Route path="/realisateur" element={<RealisateurDetails />} />
          {/* Route pour le profil utilisateur */}
          {/* <Route path="/profile" element={<UserProfile />} /> */}

          {/* Route par défaut ou autre page d'accueil */}
          {/* <Route path="*" element={<div>Page non trouvée</div>} /> */}
        </Routes>
      </div>

  );
}

export default App;



