import db from '../db.js'; // ← nécessite aussi que db.js utilise export

export async function ajouterFilm(req, res) {
  try {
    const { titre, lien_youtube, synopsis, affiche, date_creation, duree, Id_Realisateur } = req.body;

    if (!titre || !Id_Realisateur) {
      return res.status(400).json({ success: false, error: 'Titre et réalisateur requis' });
    }

    const sqlFilm = `
      INSERT INTO Film (titre, lien_youtube, synopsis, affiche, date_creation, duree, date_ajout)
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `;

    const [result] = await db.query(sqlFilm, [titre, lien_youtube, synopsis, affiche, date_creation, duree]);
    const insertedFilmId = result.insertId;

    const sqlRealisateur = `
      INSERT INTO Réaliser (Id_Film, Id_Realisateur)
      VALUES (?, ?)
    `;

    await db.query(sqlRealisateur, [insertedFilmId, Id_Realisateur]);

    return res.status(200).json({ success: true, message: 'Film ajouté avec succès' });
  } catch (error) {
    console.error('Erreur ajout film:', error);
    return res.status(500).json({ success: false, error: 'Erreur serveur lors de l\'ajout' });
  }
}
