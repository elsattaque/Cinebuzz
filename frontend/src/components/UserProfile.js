import React, { useEffect, useState } from 'react';
import '.././css/UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/utilisateur/2')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Erreur API:', err));
  }, []);

  if (!user) return <p>Chargement...</p>;

  return (
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
            <div>
              <div className="recent-list">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="recent-item"></div>
                ))}
              </div>
            </div>
            <p className="biographie-p"><span className="biographie-span">Biographie :</span> {user.biographie}</p>
          </div>
        </div>
      </div>
      <div className="reviews-section">
        <div className="reviews-header">
          <h2>Reviews</h2>
        </div>
        <div className="reviews-list">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="review-card">
              <p className="review-text">“blabalablabla”</p>
              <div className="review-meta">
                <p><strong>Film</strong></p>
                <p>Réalisateur</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
