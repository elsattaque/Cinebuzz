const db = require('../db');

exports.getFilmById = (req, res) => {
  const filmId = req.params.id;
  console.log('Requête pour le film ID:', filmId);
  timeout: 5000 
  const sql = 'SELECT * FROM Film WHERE Id_Film = ?';
  
  console.log('Exécution de la requête SQL...'); // Ajout d'un log juste avant l'exécution
  
  db.query(sql, [filmId], (err, results) => {
    console.log('Résultats reçus de la base de données :', results); // Log des résultats de la requête

    if (err) {
      console.error('Erreur lors de la récupération du film :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length === 0) {
      console.log('Film non trouvé pour ID:', filmId);
      return res.status(404).json({ error: 'Film non trouvé' });
    }

    console.log('Film trouvé:', results[0]); // Log quand un film est trouvé

    res.json(results[0]); // Renvoie le premier film trouvé
  });
};
