import express from "express";
import connection from "../db.js";

const router = express.Router();

// Route pour récupérer un film selon son ID
router.get("/:id", async (req, res) => {
  const filmId = req.params.id;
  try {
    // Récupérer les infos du film + réalisateur
    const [filmRows] = await connection.query(
      `SELECT 
        f.*, 
        r.lien_dons, 
        r.Id_Realisateur, 
        u.nom AS nom_realisateur, 
        u.prenom AS prenom_realisateur,
        r.objectif_dons
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
    if (filmRows .length > 0) {
      res.json(filmRows[0]);
    } else {
      res.status(404).json({ error: "Film non trouvé" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
