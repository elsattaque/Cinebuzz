
import { Link } from 'react-router-dom';
import '../Style/MovieCardDetails.css';
import logo from '../assets/Logo.png'; 
import { useNavigate } from 'react-router-dom';

import poster from '../assets/theGloryPoster.webp';
import ml from '../assets/Actor1.jpg';
import fl from '../assets/OIP.webp';
import villain from '../assets/OIP (1).webp';
import { useParams } from "react-router-dom";
import { moviesData } from "../Data/MoviesData";
import React from 'react';

const MovieCardDetails = () => {
  const navigate = useNavigate();

  const goToFilmPage = () => {
    navigate(`/film/${movie.id}`);
  };

  const { id } = useParams();
  const movie = moviesData.find((m) => m.id.toString() === id);

  if (!movie) return <p>Film introuvable</p>;

  return (
    <div className="movie-page">

      {/* Contenu principal */}
      <div className="main-content">
        <div className="movie-card">
          {/* Affiche */}
          <div className="left-section">
            <img src={poster} alt="Affiche The Glory" className="poster" />
          </div>

          {/* Infos */}
          <div className="right-section">
            <h2>Titre : <span>The Glory – Kdrama</span></h2>
            <div className="movie-info">
              <p><strong>Année :</strong> 2023</p>
              <p><strong>Distribution :</strong> Lee Do Hyun, Song Hye Kyo, Lim Ji Yeon</p>
              <p><strong>Genre :</strong> Drame, Mélodrame, Thriller</p>
              <p><strong>Personnage :</strong> Yeo Jeong</p>
              <p><strong>Citation préférée :</strong> <em>« Cette histoire n’est pas un conte de fées, c’est une fable. »</em></p>
            </div>

            <div className="divider"></div>

            {/* Résumé */}
            <div className="summary">
              <h3>Résumé</h3>
              <p>
                <strong>The Glory</strong> est un Kdrama captivant sur la vengeance et la rédemption. Il suit l’histoire de Moon Dong Eun, 
                une lycéenne qui rêve de devenir architecte, mais doit abandonner l’école après avoir subi des violences scolaires brutales. 
                Des années plus tard, elle planifie méthodiquement sa vengeance en devenant enseignante dans l’école de l’enfant de son ancienne bourreau.
              </p>
            </div>

            <div className="divider"></div>

            {/* Critique */}
            <div className="review">
              <h3>Mon avis</h3>
              <p>
                Une histoire incroyable avec des moments intenses et des émotions profondes. Le développement des personnages est exceptionnel 
                et l’intrigue te tient en haleine du début à la fin. C’est l’un des meilleurs dramas de vengeance que j’ai vus, avec des performances remarquables de tout le casting.
              </p>
            </div>

            {/* Personnages */}
            <div className="characters">
              <div className="character">
                <img src={ml} alt="Personnage principal masculin" />
                <p>Ju Yeo Jeong (ENFP)</p>
              </div>
              <div className="character">
                <img src={fl} alt="Personnage principal féminin" />
                <p>Moon Dong Eun (INTJ)</p>
              </div>
              <div className="character">
                <img src={villain} alt="Antagoniste" />
                <p>Park Yeon Jin (ESFJ)</p>
              </div>
            </div>
            
            <button className="go-to-film-button" onClick={goToFilmPage}>
              🎬 Regarder le film
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
