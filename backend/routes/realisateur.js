// routes/realisateur.js
import express from 'express';
import connection from '../db.js';

const router = express.Router();

// Route : GET /api/realisateur/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await connection.query(
      `SELECT 
         u.nom, u.prenom, u.photo, u.biographie, u.ddn AS date_naissance,
         r.lien_dons, r.objectif_dons, r.Id_Realisateur,
         f.Id_Film AS id_film, f.titre, f.affiche, f.date_creation,
         s.lien_sites AS lien_site_officiel
       FROM Realisateur r
       JOIN Utilisateur u ON r.Id_Utilisateur = u.Id_Utilisateur
       LEFT JOIN Réaliser re ON r.Id_Realisateur = re.Id_Realisateur
       LEFT JOIN Film f ON re.Id_Film = f.Id_Film
       LEFT JOIN Envoye_vers ev ON r.Id_Realisateur = ev.Id_Realisateur
       LEFT JOIN Sites s ON ev.Id_Sites = s.Id_Sites
       WHERE r.Id_Realisateur = ?`, [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Réalisateur non trouvé" });
    }

    // On prend les infos communes depuis la première ligne
    const first = rows[0];

    const realisateur = {
      id: first.Id_Realisateur,
      nom: first.nom,
      prenom: first.prenom,
      photo: first.photo,
      biographie: first.biographie,
      date_naissance: first.date_naissance,
      lien_site_officiel: first.lien_site_officiel,
      lien_dons: first.lien_dons,
      objectif_dons: first.objectif_dons,
      films: rows
        .filter(r => r.id_film) // exclure null si aucun film
        .map(f => ({
          id: f.id_film,
          titre: f.titre,
          affiche: f.affiche,
          date_creation: f.date_creation
        }))
    };

    res.json(realisateur);
  } catch (error) {
    console.error("Erreur lors de la récupération du réalisateur :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});


export default router;
