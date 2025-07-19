import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Film.css';
//import logo from '../assets/LogoCinebuzzV1.png';

const Film = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [likes, setLikes] = useState(0);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [spoiler, setSpoiler] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  // TEMP : à remplacer plus tard par les données dynamiques
  const Id_Film = 1;
  const Id_Spectateur = 2;

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleCommentChange = (e) => setCommentInput(e.target.value);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!commentInput.trim() || rating === 0) {
      alert("Veuillez entrer une note et un commentaire.");
      return;
    }

    const reviewData = {
      Id_Film,
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
        setComments([...comments, commentInput.trim()]);
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

  return (
    <div className="film-container">
      {/* Navbar supprimée */}

      <div className="film-main-content">
        <div className="film-card">
          <div className="film-grid">
            <div className="film-video-section">
              <div className="film-video-container">
                <iframe
                  className="film-iframe"
                  src="https://www.youtube.com/embed/9PbTuEaVinM?start=69"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="film-actions-section">
              <div className="film-actions-container">
                <button
                  onClick={handleLike}
                  className={`film-action-button ${isLiked ? 'film-like-button' : 'film-normal-button'}`}
                >
                  🍿 <span>Like</span>
                </button>
                <button
                  className="film-action-button film-don-button"
                  onClick={goToDonPage}
                >
                  💖 <span>Don</span>
                </button>
                <div className="film-likes-count">
                  {likes} {likes <= 1 ? 'like' : 'likes'}
                </div>
              </div>
            </div>
          </div>

          <div className="film-comments-section">
            <h3 className="film-comments-title">💬 <span>COMMENTAIRE</span></h3>

            <form className="film-comment-form" onSubmit={handleReviewSubmit}>
              <input
                type="text"
                placeholder="Écris un commentaire..."
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
                    onClick={() => setRating(star)}
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
                /> Spoiler ?
              </label>

              <button type="submit" className="film-send-button">
                Envoyer
              </button>
            </form>

            <div className="film-comments-list">
              {comments.map((comment, index) => (
                <div key={index} className="film-comment-item">
                  <div className="film-comment-content">
                    <div className="film-comment-text">
                      <div className="film-username">Utilisateur</div>
                      <div className="film-comment">{comment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Film;
