import React, { useState } from 'react';
import './Film.css';
import logo from '../assets/LogoCinebuzzV1.png';
import { useParams } from "react-router-dom";
import { moviesData } from '../Data/MoviesData';
import React from 'react';

const Don = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Recherche lancée pour : "${searchInput}"`);
  };

  return (
    <div className="film-container">
      <header className="film-header">
        <div className="film-header-content">
          <div className="film-logo">
            <img src={logo} alt="Logo" className="film-logo-icon" />
            <span className="film-logo-text">CINEBUZZ</span>
          </div>
        </div>
      </header>

      <main className="film-main-content">
        <div className="film-card" style={{ textAlign: 'center' }}>
          <h2>Soutenez {donInfo.prenom} {donInfo.nom}</h2>
          <p>✨ Encouragez la création indépendante en participant à la cagnotte du réalisateur !</p>
          <a
            href="https://www.leetchi.com/fr/collecter-recolter-don-d-argent-en-ligne?utm_source=bing&utm_medium=cpc&utm_campaign=lca_gen_categorie&utm_term=search_generic&msclkid=404cc0eb982519b0dc1ca8acbc22c0ec"
            target="_blank" // permet de rester sur la page ouvre simplement un onlget en plus               
          >
            Faire un don sur Leetchi
          </a>
        </div>
      </main>
    </div>
  );
};

export default Don;
