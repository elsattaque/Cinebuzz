import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { Id_Film, Id_Spectateur, note, texte_review, spoiler } = req.body;

  try {
    const now = new Date();

    await db.query(`
      INSERT INTO Review (Id_Film, Id_Spectateur, note, texte_review, spoiler, date_review)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE note = ?, texte_review = ?, spoiler = ?, date_review = ?
    `, [Id_Film, Id_Spectateur, note, texte_review, spoiler, now, note, texte_review, spoiler, now]);

    // Récupérer toutes les reviews du film (sans pseudo spectateur)
    const [rows] = await db.query(`
      SELECT * FROM Review WHERE Id_Film = ?
    `, [Id_Film]);

    res.status(200).json({ success: true, reviews: rows });
  } catch (error) {
    console.error('Erreur lors de l\'insertion de la review:', error);
    res.status(500).json({ success: false, error: 'Erreur serveur' });
  }
});

export default router;
