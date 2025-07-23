import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM utilisateur WHERE Id_Utilisateur = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:id/films-vus', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query(`
      SELECT f.Id_Film, f.titre, f.affiche, f.date_ajout, w.date_ajout AS date_vue
      FROM Utilisateur u
      JOIN Spectateur s ON u.Id_Utilisateur = s.Id_Utilisateur
      JOIN Watchlist w ON s.Id_Spectateur = w.Id_Spectateur
      JOIN Film f ON w.Id_Film = f.Id_Film
      WHERE u.Id_Utilisateur = ? AND w.vu = TRUE
      ORDER BY w.date_ajout DESC
    `, [id]);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:id/reviews-user', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query(`
      SELECT 
      Review.Id_Film,
      Film.titre,
      Review.note,
      Review.texte_review,
      Review.date_review,
      Review.spoiler
      FROM Review
      JOIN Spectateur ON Review.Id_Spectateur = Spectateur.Id_Spectateur
      JOIN Film ON Review.Id_Film = Film.Id_Film
      WHERE Spectateur.Id_Utilisateur = 2;
    `, [id]);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;

