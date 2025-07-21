import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../Style/RealisateurDetails.css'; // crée un fichier CSS similaire à MovieCardDetails.css

const RealisateurDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [realisateur, setRealisateur] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/realisateur/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRealisateur(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du réalisateur:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!realisateur) return <p>Réalisateur introuvable</p>;

  const {
    nom,
    prenom,
    photo,             // image du réalisateur
    biographie,
    date_naissance,
    films,             // liste des films réalisés (array)
    lien_site_officiel,
  } = realisateur;

  return (
    <div className="realisateur-page">
      <div className="main-content">
        <div className="realisateur-card">
          {/* Photo */}
          <div className="left-section">
            <img src={photo} alt={`Photo de ${prenom} ${nom}`} className="poster" />
          </div>

          {/* Détails */}
          <div className="right-section">
            <h2>Réalisateur : <span>{prenom} {nom}</span></h2>
            <div className="realisateur-info">
              <p><strong>Date de naissance :</strong> {new Date(date_naissance).toLocaleDateString()}</p>
              {lien_site_officiel && (
                <p>
                  <strong>Site officiel :</strong>{' '}
                  <a href={lien_site_officiel} target="_blank" rel="noreferrer">
                    Visiter
                  </a>
                </p>
              )}
            </div>

            <div className="divider"></div>

            <div className="biographie">
              <h3>Biographie</h3>
              <p>{biographie}</p>
            </div>

            <div className="divider"></div>

            <div className="films">
              <h3>Films réalisés</h3>
              {films && films.length > 0 ? (
                <ul>
                  {films.map((film) => (
                    <li key={film.id}>
                      <Link to={`/film/${film.id}`}>
                        {film.titre} ({new Date(film.date_creation).getFullYear()})
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun film trouvé pour ce réalisateur.</p>
              )}
            </div>

            <button className="go-back-button" onClick={() => navigate(-1)}>
              ← Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisateurDetails;
