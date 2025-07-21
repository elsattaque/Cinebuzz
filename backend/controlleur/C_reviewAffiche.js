import db from '../db.js';

export async function getFilmReviews(req, res) {
  try {
    const { id } = req.params; // id = Id_Film

    console.log("⚙️ getFilmReviews controller déclenché pour film:", id);

    const sql = `
      SELECT 
        r.note, 
        r.texte_review, 
        r.date_review, 
        r.spoiler, 
        s.pseudo
      FROM 
        Review r
      JOIN 
        Spectateur s ON r.Id_Spectateur = s.Id_Spectateur
      WHERE 
        r.Id_Film = ?
      ORDER BY 
        r.date_review DESC
    `;

    const [reviews] = await db.query(sql, [id]);

    // Retourner la liste des reviews
    return res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error('Erreur récupération reviews:', error);
    return res.status(500).json({ success: false, error: 'Erreur serveur lors de la récupération des reviews' });
  }
}
