import express from "express";
import connection from "../db.js";

const router = express.Router();

// Route pour récupérer un film selon son ID
router.get("/:id", async (req, res) => {
  const filmId = req.params.id;
  try {
    const [rows] = await connection.query(
      "SELECT * FROM Film WHERE Id_Film = ?",
      [filmId]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: "Film non trouvé" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
