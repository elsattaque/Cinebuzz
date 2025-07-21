import express from 'express';
import connection from '../db.js';

const router = express.Router();

// Route pour récupérer un film avec infos du réalisateur + ses reviews
router.get('/:id', async (req, res) => {
  const filmId = req.params.id;

  try {
    // Récupérer les infos du film + réalisateur
    const [filmRows] = await connection.query(
      `SELECT 
        f.*, 
        r.lien_dons, 
        r.Id_Realisateur, 
        u.nom AS nom_realisateur, 
        u.prenom AS prenom_realisateur
      FROM 
        Film f
      JOIN 
        Réaliser re ON f.Id_Film = re.Id_Film
      JOIN 
        Realisateur r ON re.Id_Realisateur = r.Id_Realisateur
      JOIN 
        Utilisateur u ON r.Id_Utilisateur = u.Id_Utilisateur
      WHERE 
        f.Id_Film = ?`,
      [filmId]
    );

    if (filmRows.length === 0) {
      return res.status(404).json({ error: 'Film non trouvé' });
    }

    // Récupérer les reviews associées au film
    const [reviewRows] = await connection.query(
      `SELECT 
    
    R.note,
    R.texte_review,
    R.date_review,
    R.spoiler, S.pseudo FROM Film F LEFT JOIN Review R ON F.Id_Film = R.Id_Film LEFT JOIN Spectateur S ON R.Id_Spectateur = S.Id_Spectateur
    WHERE F.Id_Film = ?
`,
      [filmId]
    );
    // Récupérer la moyenne des notes
    const [[{ moyenne_note }]] = await connection.query(
      `SELECT AVG(note) AS moyenne_note FROM Review WHERE Id_Film = ?`,
      [filmId]
    );

    // Renvoyer le film avec ses reviews
    res.json({
      ...filmRows[0],
      reviews: reviewRows,
      moyenne_note: moyenne_note ? parseFloat(moyenne_note).toFixed(1) : null
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
    
  }
});

export default router;
