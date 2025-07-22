import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../Style/MovieCardDetails.css';


const MovieCardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/film/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du film:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!film) return <p>Film introuvable</p>;

  const {
    titre,
    date_creation,
    synopsis,
    affiche,
    lien_dons,
    nom_realisateur,
    prenom_realisateur,
    Id_Realisateur,
    reviews,
    moyenne_note,
  } = film;

  console.log(affiche);
  
  return (
    <div className="movie-page">
      <div className="main-content">
        <div className="movie-card">
          {/* Affiche */}
          <div className="left-section">
            <img src={affiche} alt={`Affiche de ${titre}`} className="poster" />
          </div>

          {/* Détails */}
          <div className="right-section">
            <h2>Titre : <span>{titre}</span></h2>
            <div className="movie-info">
              <p><strong>Année :</strong> {new Date(date_creation).getFullYear()}</p>
              <p>
                <strong>Réalisateur :</strong>{' '}
                <Link to={`/realisateur/${Id_Realisateur}`}>
                  {prenom_realisateur} {nom_realisateur}
                </Link>
              </p>
              {moyenne_note && (
                <p><strong>Note moyenne :</strong> ⭐ {moyenne_note}/5</p>
              )}
              {lien_dons && (
                <p>
                  <strong>Lien de dons :</strong>{' '}
                  <a href={lien_dons} target="_blank" rel="noreferrer">
                    Soutenir le film
                  </a>
                </p>
              )}
            </div>

            <div className="divider"></div>

            <div className="summary">
              <h3>Résumé</h3>
              <p>{synopsis}</p>
            </div>

            <div className="divider"></div>

            <div className="review">
              <h3>Commentaires</h3>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <p><strong>{review.pseudo || 'Anonyme'} :</strong> ⭐ {review.note}/5</p>
                    <p>{review.texte_review}</p>
                    {review.spoiler && <span className="spoiler-alert">⚠️ Spoiler</span>}
                    <hr />
                  </div>
                ))
              ) : (
                <p>Aucun commentaire pour ce film.</p>
              )}
            </div>

            <button className="go-to-film-button" onClick={() => navigate(`/film/${id}`)}>
              🎬 Regarder le film
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
