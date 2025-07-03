import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/MovieCardDetails.css';
import logo from '../assets/Logo.png'; 
import poster from '../assets/theGloryPoster.webp';
import ml from '../assets/Actor1.jpg';
import fl from '../assets/OIP.webp';
import villain from '../assets/OIP (1).webp';

const MovieCardDetails = () => {
  return (
    <div className="movie-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Cinebuzz Logo" className="logo-image" />
        </div>
        
        <div className="catalog-links">
          <Link to="/films" className="nav-link">Catalogue des films</Link>
          <Link to="/realisateurs" className="nav-link">Catalogue des réalisateurs</Link>
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

      {/* Main Content */}
      <div className="main-content">
        <div className="movie-card">
          {/* Poster */}
          <div className="left-section">
            <img src={poster} alt="The Glory Poster" className="poster" />
          </div>

          {/* Infos */}
          <div className="right-section">
            <h2>Title : <span>The Glory – Kdrama</span></h2>
            <div className="movie-info">
              <p><strong>Year :</strong> 2023</p>
              <p><strong>Cast :</strong> Lee Do Hyun, Song Hye Kyo, Lim Ji Yeon</p>
              <p><strong>Genre :</strong> Drama, Melodrama, Thriller</p>
              <p><strong>Favourite character :</strong> Yeo Jeong</p>
              <p><strong>Fav quote :</strong> <em>"This story isn't a fairytale, it's a fable."</em></p>
            </div>

            <div className="divider"></div>

            {/* Summary */}
            <div className="summary">
              <h3>Summary</h3>
              <p>
                The Glory is a gripping Kdrama about revenge and redemption. It follows Moon Dong Eun, 
                a high school student who dreams of becoming an architect but had to drop out after 
                suffering brutal school violence. Years later, she meticulously plans her revenge on 
                her bullies, becoming a teacher at her bully's child's school.
              </p>
            </div>

            <div className="divider"></div>

            {/* Review */}
            <div className="review">
              <h3>My Review</h3>
              <p>
                Amazing story with thrilling moments and deep emotions. The character development is 
                exceptional, and the plot keeps you engaged throughout. It's one of the best revenge 
                dramas I've seen, with outstanding performances from the entire cast.
              </p>
            </div>

            {/* Characters */}
            <div className="characters">
              <div className="character">
                <img src={ml} alt="Male Lead" />
                <p>Ju Yeo Jeong (ENFP)</p>
              </div>
              <div className="character">
                <img src={fl} alt="Female Lead" />
                <p>Moon Dong Eun (INTJ)</p>
              </div>
              <div className="character">
                <img src={villain} alt="Villain" />
                <p>Park Yeon Jin (ESFJ)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;