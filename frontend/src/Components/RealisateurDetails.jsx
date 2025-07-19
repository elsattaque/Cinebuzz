import React from 'react';
import '../Style/RealisateurDetails.css'; // Tu peux aussi fusionner dans MovieCardDetails.css
import photo from '../assets/realisateurs.webp'; // à remplacer dynamiquement
import logo from '../assets/Logo.png'; 

const RealisateurDetails = () => {
  return (
    <div className="movie-page">
      {/* Sidebar identique à MovieCardDetails */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo Cinebuzz" className="logo-image" width={100} />
        </div>

        <div className="catalog-links">
          <a href="/films" className="nav-link">Catalogue des films</a>
          <a href="/realisateurs" className="nav-link">Catalogue des réalisateurs</a>
        </div>

        <div className="watch-section">
          <h3>Regarder</h3>
          <ul className="watch-list">
            <li>TOP 3</li>
            <li>Création de la semaine</li>
            <li>Nouveautés</li>
            <li>Populaires</li>
            <li>Recommandations</li>
          </ul>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="main-content">
        <div className="movie-card realisateur-card">
          {/* Photo */}
          <div className="left-section">
            <img src={photo} alt="Portrait du réalisateur" />
          </div>

          {/* Infos */}
          <div className="right-section">
            <h2>Nom : <span>Jean Dupont</span></h2>
            <div className="movie-info">
              <p><strong>Email :</strong> jean.dupont@mail.com</p>
              <p><strong>Date de naissance :</strong> 12 avril 1980</p>
              <p><strong>Date d’inscription :</strong> 1 février 2023</p>
              <p><strong>Objectif de dons :</strong> 5000 €</p>
              <p><strong>Lien de dons :</strong> <a href="https://donation.link" target="_blank" rel="noopener noreferrer">donation.link</a></p>
            </div>

            <div className="divider"></div>

            <div className="summary">
              <h3>Biographie</h3>
              <p>
                Jean Dupont est un réalisateur passionné de cinéma indépendant. Ses œuvres explorent 
                les thèmes de la mémoire, de l'identité et des émotions humaines profondes.
              </p>
            </div>

            <div className="divider"></div>

            <div className="review">
              <h3>Sites associés</h3>
              <ul>
                <li><a href="https://portfolio.jeandupont.fr" target="_blank">portfolio.jeandupont.fr</a></li>
                <li><a href="https://cinemacollab.com/dupont" target="_blank">cinemacollab.com/dupont</a></li>
              </ul>
            </div>

            <div className="divider"></div>

            <div className="characters">
              <div className="character">
                <img src="/affiches/film1.jpg" alt="Film 1" />
                <p>Le Silence des Ombres</p>
              </div>
              <div className="character">
                <img src="/affiches/film2.jpg" alt="Film 2" />
                <p>Les Échos du Passé</p>
              </div>
              {/* Autres films ici */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisateurDetails;
