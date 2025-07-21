import express from 'express';
import connection from '../db.js';

const router = express.Router();

// Route : Top 3 films par moyenne
router.get('/moyenne', async (req, res) => {
  try {
    const [rows] = await connection.query(`
      SELECT 
        f.Id_Film,
        f.titre,
        f.lien_youtube,
        AVG(r.note) AS moyenne
      FROM Film f
      JOIN Review r ON f.Id_Film = r.Id_Film
      GROUP BY f.Id_Film
      ORDER BY moyenne DESC
      LIMIT 3
    `);

    res.json(rows);
  } catch (err) {
    console.error('Erreur récupération top films :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération du top films.' });
  }
});

export default router;
