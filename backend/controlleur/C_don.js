const db = require('../db');

exports.getLienDonByFilmId = (req, res) => {
  const filmId = req.params.id;
  console.log("filmId reçu dans le contrôleur Don :", filmId); // pour vérif

  const sql = `
    SELECT r.lien_dons, u.nom, u.prenom
    FROM Realiser rel
    JOIN Realisateur r ON rel.Id_Realisateur = r.Id_Realisateur
    JOIN Utilisateur u ON r.Id_Utilisateur = u.Id_Utilisateur
    WHERE rel.Id_Film = ?
  `;

  db.query(sql, [filmId], (err, results) => {
    if (err) {
      console.error('Erreur SQL lors de la récupération du lien de don :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Aucun réalisateur trouvé pour ce film' });
    }

    console.log("Résultat Don :", results[0]); // debug
    res.json(results[0]);
  });
};
