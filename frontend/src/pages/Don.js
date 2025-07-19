import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Film.css';
import logo from '../assets/LogoCinebuzzV1.png';

const Don = () => {
  const { id } = useParams(); // filmId
  const [donInfo, setDonInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonLien = async () => {
      try {
        const response = await fetch(`http://localhost:3000/don/film/${id}`);
        if (!response.ok) throw new Error("Erreur serveur");
        const data = await response.json();
        setDonInfo(data);
      } catch (err) {
        console.error('Erreur lors du chargement du lien de don :', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDonLien();
  }, [id]);

  console.log("Film ID reçu dans Don.js :", id);


  if (loading) return <div>Chargement...</div>;
  if (!donInfo) return <div>Aucune information de don disponible.</div>;

  return (
    <div className="film-container">
      <header className="film-header">
        <div className="film-header-content">
          <div className="film-logo">
            <img src={logo} alt="Logo" className="film-logo-icon" />
            <span className="film-logo-text">CINEBUZZ</span>
          </div>
        </div>
      </header>

      <main className="film-main-content">
        <div className="film-card" style={{ textAlign: 'center' }}>
          <h2>Soutenez {donInfo.prenom} {donInfo.nom}</h2>
          <p>✨ Encouragez la création indépendante en participant à la cagnotte du réalisateur !</p>
          <a
            href={donInfo.lien_dons}
            target="_blank"
            rel="noopener noreferrer"
            className="film-don-button"
          >
            💖 Veuillez cliquer ici pour aller à la page du site de don
          </a>
        </div>
      </main>
    </div>
  );
};

export default Don;
