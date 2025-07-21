import React, { useState, useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import './Film.css';

const ReviewItem = ({ review, formatDateFr }) => {
  const [showSpoiler, setShowSpoiler] = useState(false);

  return (
    <div className="film-comment-item">
      <div className="film-comment-content">
        <div className="film-comment-text">
          <div className="film-username">{review.pseudo || `Spectateur #${review.Id_Spectateur}`}</div>

          {review.spoiler && !showSpoiler ? (
            <>
              <div className="film-spoiler-warning">⚠️ Spoiler</div>
              <button onClick={() => setShowSpoiler(true)} className="film-spoiler-button">
                Cette review contient du spoil, cliquer si vous souhaitez consulter la review.
              </button>
            </>
          ) : (
            <div className="film-comment">{review.texte_review}</div>
          )}

          <div className="film-note">Note: {review.note} / 5</div>
          <div className="film-date">{formatDateFr(review.date_review)}</div>
        </div>
      </div>
    </div>
  );
};

const Film = () => {
  const [film, setFilm] = useState(null);
  const [likes, setLikes] = useState(0);
  const [commentInput, setCommentInput] = useState('');
  const [rating, setRating] = useState(0);
  const [spoiler, setSpoiler] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { filmId } = useParams();

  const Id_Spectateur = 1; // temporaire

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/film/${filmId}`);
        const text = await response.text();
        console.log("Réponse brute :", text);
        const data = JSON.parse(text);

        if (data && data.Id_Film) {
          // S'assurer que reviews est un tableau
          setFilm({
            ...data,
            reviews: data.reviews || [],
          });
          console.log("Lien de don reçu :", data.lien_dons);
        } else {
          console.error("Film non trouvé");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données du film:", error);
      }
    };

    fetchFilmData();
  }, [filmId]);

  const formatDateFr = (dateString) => {
    if (!dateString) return "Date de création non disponible.";

    const date = new Date(dateString);
    if (isNaN(date)) return "Date invalide";

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  const handleCommentChange = (e) => setCommentInput(e.target.value);
  const handleRatingClick = (newRating) => setRating(newRating);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!commentInput.trim() || rating === 0) {
      alert("Veuillez entrer une note et un commentaire.");
      return;
    }

    const reviewData = {
      Id_Film: filmId,
      Id_Spectateur,
      note: rating,
      texte_review: commentInput.trim(),
      spoiler,
    };

    try {
      const response = await fetch('http://localhost:3000/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });

      const result = await response.json();
      if (result.success) {
        setFilm(prev => ({
          ...prev,
          reviews: [...(prev.reviews || []), {
            Id_Review: result.Id_Review || Math.random().toString(36).substr(2, 9),
            Id_Spectateur,
            note: rating,
            texte_review: commentInput.trim(),
            spoiler,
            date_review: new Date().toISOString(),
          }]
        }));
        setCommentInput('');
        setRating(0);
        setSpoiler(false);
        alert('Votre critique a été enregistrée !');
      } else {
        alert('Erreur lors de l\'enregistrement de la critique.');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      alert('Erreur lors de l\'envoi de la critique.');
    }
  };

  if (!film) {
    return <div className="film-loading">Chargement...</div>;
  }

  return (
    <div className="film-container">
      <div className="film-main-content">
        <div className="film-card">
          <div className="film-grid">
            {/* COLONNE GAUCHE : Vidéo + Actions */}
            <div className="film-video-section">
              <div className="film-video-container">
                {film.lien_youtube ? (
                  <iframe
                    className="film-iframe"
                    src={`https://www.youtube.com/embed/${film.lien_youtube.split('=')[1]}`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>Vidéo indisponible</p>
                )}
              </div>

              <div className="film-actions-section-under-video">
                <div className="film-actions-container">
                  <button
                    onClick={handleLike}
                    className={`film-action-button ${isLiked ? 'film-like-button' : 'film-normal-button'}`}
                  >
                    🍿 <span>Like</span>
                  </button>

                  {film.lien_dons ? (
                    <a
                      href={film.lien_dons}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="film-action-button film-don-button"
                    >
                      💖 <span>Faire un don</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="film-action-button film-don-button"
                      title="Pas de lien de don disponible"
                    >
                      💖 <span>Don indisponible</span>
                    </button>
                  )}

                  <div className="film-likes-count">
                    {likes} {likes <= 1 ? 'like' : 'likes'}
                  </div>
                  <div>
                  {film.moyenne_note !== null && (
                  <div className="film-average-note">
                    🎯 Moyenne des notes : <strong>{film.moyenne_note} / 5</strong>
                  </div>
                )}
                </div>
                </div>
                
              </div>
            </div>

            {/* COLONNE DROITE : Titre + Synopsis + real */}
            <div className="film-info-section">
              <div className="film-titre">
                <h2>Titre</h2>
                <p>
                  <Link to={`/movie/${filmId}`}>
                    {film.titre || "Titre non disponible."}
                  </Link>
                </p>
              </div>

              <div className="film-synopsis">
                <h2>Synopsis</h2>
                <p>{film.synopsis || "Synopsis non disponible."}</p>
              </div>
              <div className="film-synopsis">
                <h2>Date de création</h2>
                <p>{formatDateFr(film.date_creation)}</p>
              </div>
              <div className="film-synopsis">
                <h2>Réalisateur </h2>
                <p> {(film.prenom_realisateur && film.nom_realisateur) ? `${film.prenom_realisateur} ${film.nom_realisateur}`: "Réalisateur non disponible."}</p>
              </div>
            </div>
          </div>

          {/* Section Reviews */}
          <div className="film-comments-section">
            <h3 className="film-comments-title">
              <span>Espace review</span>
            </h3>

            <form className="film-comment-form" onSubmit={handleReviewSubmit}>
              <input
                type="text"
                placeholder="Donne nous ton avis sur ce projet ..."
                value={commentInput}
                onChange={handleCommentChange}
                className="film-comment-input"
              />

              <div className="film-rating">
                Note :
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star ${star <= rating ? 'selected' : ''}`}
                    onClick={() => handleRatingClick(star)}
                  >
                    ⭐
                  </button>
                ))}
              </div>

              <label className="film-spoiler-checkbox">
                <input
                  type="checkbox"
                  checked={spoiler}
                  onChange={(e) => setSpoiler(e.target.checked)}
                />
                Spoiler ?
              </label>

              <button type="submit" className="film-send-button">
                Envoyer
              </button>
            </form>

            <div className="film-comments-list">
              {film.reviews && film.reviews.length > 0 ? (
                film.reviews.map((review) => (
                  <ReviewItem key={review.Id_Review} review={review} formatDateFr={formatDateFr} />
                ))
              ) : (
                <p>Aucune review pour ce film.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
