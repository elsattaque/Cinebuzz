import { useState } from 'react';
import './Film.css';
import logo from '../assets/LogoCinebuzzV1.png';
import { useParams } from "react-router-dom";
import { moviesData } from '../Data/MoviesData';

const Don = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Recherche lancée pour : "${searchInput}"`);
  };
  
  const { id } = useParams();
  const movie = moviesData.find((m) => m.id.toString() === id);
  if (!movie) return <p>Film introuvable</p>;

  return (
    <div className="film-container">
      <header className="film-header">
        <div className="film-header-content">
          <div className="film-logo">
            <img src={logo} alt="Logo" className="film-logo-icon" />
            <span className="film-logo-text">CINEBUZZ</span>
          </div>

          <form className="film-search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="film-search-input"
              placeholder="Recherche..."
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button type="submit" className="film-search-button">
              🔍
            </button>
          </form>
        </div>
      </header>

      <main className="film-main-content">
        <div className="film-card" style={{ textAlign: 'center' }}>
          <h2>Faire un don</h2>
          <p>
            Pour soutenir notre projet, et faire le buzz avec nous, vous pouvez faire un don en cliquant sur le lien ci-dessous* :
          </p>
          <p>*(Vous allez etre redirigé vers la cagnotte de l'artiste)</p>
          <a
            href="https://www.leetchi.com/fr/collecter-recolter-don-d-argent-en-ligne?utm_source=bing&utm_medium=cpc&utm_campaign=lca_gen_categorie&utm_term=search_generic&msclkid=404cc0eb982519b0dc1ca8acbc22c0ec"
            target="_blank" // permet de rester sur la page ouvre simplement un onlget en plus    
            rel="noreferrer"           
          >
            Faire un don sur Leetchi
          </a>
        </div>
      </main>
    </div>
  );
};

export default Don;
