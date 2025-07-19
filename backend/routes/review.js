// routes/reviews.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Connexion MySQL

router.post('/', async (req, res) => {
  const { Id_Film, Id_Spectateur, note, texte_review, spoiler } = req.body;

  try {
    const now = new Date();
    await db.query(`
      INSERT INTO Review (Id_Film, Id_Spectateur, note, texte_review, spoiler, date_review)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE note = ?, texte_review = ?, spoiler = ?, date_review = ?
    `, [Id_Film, Id_Spectateur, note, texte_review, spoiler, now, note, texte_review, spoiler, now]);

    res.status(200).json({ success: true, message: 'Review enregistrée' });
  } catch (error) {
    console.error('Erreur lors de l\'insertion de la review:', error);
    res.status(500).json({ success: false, error: 'Erreur serveur' });
  }
});

module.exports = router;
