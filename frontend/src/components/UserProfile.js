import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '.././css/UserProfile.css';
import React from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [recentFilms, setRecentFilms] = useState([]);
  const [reviewsUser, setReviewsUser] = useState([]);

  useEffect(() => {
    // Fetch infos utilisateur
    fetch('http://localhost:3000/api/utilisateur/2')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Erreur API utilisateur:', err));

    // Fetch films récemment vus
    fetch('http://localhost:3000/api/utilisateur/2/films-vus')
      .then(res => res.json())
      .then(data => setRecentFilms(data))
      .catch(err => console.error('Erreur API films vus:', err));

    // Fetch reviews du user
    fetch('http://localhost:3000/api/utilisateur/2/reviews-user')
      .then(res => res.json())
      .then(data => setReviewsUser(data))
      .catch(err => console.error('Erreur API reviews user:', err));
  }, []);

  if (!user) return <p>Chargement...</p>;
  console.log(user.photo);

  return (
    <div className="main-content">
      <div className="user-page">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-info">
              <h1>{user.prenom} {user.nom}</h1>
              <img
                className="profile-photo"
                src={`${user.photo}`}
                alt="PP"
              />
              <button className="button">Edit profil</button>
            </div>
            <div className="profile-info">
              <p className="section-title">Récemment regardé</p>
              <div className="recent-list">
                {recentFilms.length > 0 ? (
                  recentFilms.slice(0, 4).map(film => {
                    console.log(film.affiche); // 🔍 Affiche l'URL de l'affiche dans la console
                    return (
                      <Link to={`/movie/${film.Id_Film}`} key={film.Id_Film} className="recent-item-link">
                        <div className="recent-item">
                          <img
                            src={film.affiche}
                            alt={film.titre}
                            className="recent-thumbnail"
                          />
                          <p className="recent-title">{film.titre}</p>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p>Aucun film regardé récemment.</p>
                )}
              </div>
              <p className="biographie-p">
                <span className="biographie-span">Biographie :</span> {user.biographie}
              </p>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <div className="reviews-header">
            <h2>Reviews</h2>
          </div>
          <div className="reviews-list">
            {reviewsUser.length > 0 ? (
              reviewsUser.map((review, index) => (
                <div key={index} className="review-card">
                  <p className="review-text">“{review.texte_review}”</p>
                  <div className="review-meta">
                    <p><strong>{review.titre}</strong></p>
                    <p>Note : {review.note}/10</p>
                    <p>Date : {new Date(review.date_review).toLocaleDateString()}</p>
                    {review.spoiler === true && <p className="spoiler-warning">⚠️ Spoiler</p>}
                  </div>
                </div>
              ))
            ) : (
              <p>Aucune review trouvée.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
