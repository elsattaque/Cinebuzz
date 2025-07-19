import React, { useState } from 'react';
import './Ajoute.css';

const AjoutFilm = () => {
  const [film, setFilm] = useState({
    titre: '',
    lien_youtube: '',
    synopsis: '',
    affiche: '',
    date_creation: '',
    duree: '',
  });

  const Id_Realisateur = 1; // à récupérer dynamiquement selon l'utilisateur connecté

  const handleChange = (e) => {
    setFilm({ ...film, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log('handleSubmit déclenché');
    e.preventDefault();

    const filmData = {
      ...film,
      Id_Realisateur,
    };

    try {
      const response = await fetch('http://localhost:3000/ajouter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filmData),
      });

      console.log('Réponse fetch status:', response.status);
      console.log('Réponse fetch ok?', response.ok);

      const result = await response.json();
      console.log('Corps JSON reçu:', result);

      if (result.success) {
        window.alert('🎉 Le film a bien été enregistré !');

        setFilm({
          titre: '',
          lien_youtube: '',
          synopsis: '',
          affiche: '',
          date_creation: '',
          duree: '',
        });
      } else {
        alert("Erreur lors de l'enregistrement du film : " + (result.error || 'Erreur inconnue'));
      }
    } catch (err) {
      console.error('Erreur attrapée dans try/catch:', err);
      alert('Erreur réseau.');
    }
  };

  return (
    <div className="ajout-film-container">
      <div className="ajout-film-main-content">
        <div className="ajout-film-card">
          <form onSubmit={handleSubmit} className="ajout-film-form">
            <h2>🎬 Ajouter un nouveau film</h2>

            <label htmlFor="titre">Titre du film</label>
            <input
              id="titre"
              type="text"
              name="titre"
              placeholder="Titre du film"
              value={film.titre}
              onChange={handleChange}
              required
            />

            <label htmlFor="lien_youtube">Lien YouTube</label>
            <input
              id="lien_youtube"
              type="text"
              name="lien_youtube"
              placeholder="Lien YouTube"
              value={film.lien_youtube}
              onChange={handleChange}
            />

            <label htmlFor="synopsis">Synopsis</label>
            <textarea
              id="synopsis"
              name="synopsis"
              placeholder="Synopsis"
              value={film.synopsis}
              onChange={handleChange}
            />

            <label htmlFor="affiche">Lien vers l'affiche</label>
            <input
              id="affiche"
              type="text"
              name="affiche"
              placeholder="Lien vers l'affiche"
              value={film.affiche}
              onChange={handleChange}
            />

            <label htmlFor="date_creation">Date de création</label>
            <input
              id="date_creation"
              type="date"
              name="date_creation"
              value={film.date_creation}
              onChange={handleChange}
            />

            <label htmlFor="duree">Durée (minutes)</label>
            <input
              id="duree"
              type="number"
              name="duree"
              placeholder="Durée (minutes)"
              value={film.duree}
              onChange={handleChange}
            />

            <button type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutFilm;
