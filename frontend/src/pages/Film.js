import { useState } from 'react';
import './Film.css';
import logo from '../assets/LogoCinebuzzV1.png';
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from '../Data/MoviesData';

const Film = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [likes, setLikes] = useState(0);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const movie = moviesData.find((m) => m.id.toString() === id);
  if (!movie) return <p>Film introuvable</p>;

  const goToDonPage = () => {
    navigate(`/Don/${movie.id}`);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleCommentChange = (e) => setCommentInput(e.target.value);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput('');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Recherche lancée pour : "${searchInput}"`);
  };

  return (
    <div className="film-container">
      <div className="film-header">
        <div className="film-header-content">
          <div className="film-logo">
            <div className="film-logo-icon">
              <img src={logo} alt="Logo" className="film-logo-icon" />
            </div>
            <span className="film-logo-text">CINEBUZZ</span>
          </div>

          <form className="film-search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Rechercher un film..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="film-search-input"
            />
            <button type="submit" className="film-search-button">🔍</button>
          </form>
        </div>
      </div>

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

            <div className="film-comment-form">
              <input
                type="text"
                placeholder="Écris un commentaire..."
                value={commentInput}
                onChange={handleCommentChange}
                className="film-comment-input"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleCommentSubmit(e);
                  }
                }}
              />
              <button
                onClick={handleCommentSubmit}
                className="film-send-button"
              >
                Envoyer
              </button>
            </div>

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
