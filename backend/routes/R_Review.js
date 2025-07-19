
/*
const express = require('express');
const router = express.Router();
const db = require('../db'); // Connexion BDD

router.post('/:id_film', async (req, res) => {
  const { id_film } = req.params;
  const { id_spectateur, note, texte_review, spoiler } = req.body;

  try {
    await db.query(
      `INSERT INTO Review (Id_Film, Id_Spectateur, note, texte_review, date_review, spoiler)
       VALUES (?, ?, ?, ?, NOW(), ?)
       ON DUPLICATE KEY UPDATE
         note = VALUES(note),
         texte_review = VALUES(texte_review),
         date_review = NOW(),
         spoiler = VALUES(spoiler)`,
      [id_film, id_spectateur, note, texte_review || null, spoiler || false]
    );
    res.status(201).json({ message: 'Review enregistrée' });
  } catch (err) {
    console.error('Erreur ajout review :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Récupérer les reviews d’un film
router.get('/:id_film', async (req, res) => {
  const { id_film } = req.params;
  try {
    const [rows] = await db.query(
      `SELECT Id_Spectateur, note, texte_review FROM Review WHERE Id_Film = ?`,
      [id_film]
    );
    res.json(rows);
  } catch (err) {
    console.error('Erreur lecture reviews :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
*/