import express, { json } from 'express';
import dotenv from 'dotenv';
import connection from './db.js';
import cors from 'cors';
import utilisateurRoute from './routes/spectateur.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // permet au front React de faire des requêtes
app.use('/api/utilisateur', utilisateurRoute);

// Routes de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

(async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM utilisateur');
    console.log(rows);
  } catch (err) {
    console.error('Erreur lors de la requête test :', err);
  }
})();
