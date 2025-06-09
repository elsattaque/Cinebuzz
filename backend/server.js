import express, { json } from 'express';
import dotenv from 'dotenv';
import connection from './db.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


// Routes de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Exemple d'une requête
connection.query('SELECT * FROM utilisateur', (err, results) => {
  if (err) throw err;
  console.log(results);
});
