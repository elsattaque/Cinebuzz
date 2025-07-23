import express from "express";
import connection from "../db.js";

const router = express.Router();

// Route pour récupérer tous les films
router.get("/", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM Film");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
