// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './db.js';

// Import des routes (en ES modules)
import utilisateurRoute from './routes/spectateur.js';
import filmRoute from './routes/film.js';
import realisateurRoute from './routes/realisateur.js';


// import R_Don from './routes/R_don.js';
import reviewRoute from './routes/review.js';
import R_ajoute from './routes/R_ajoute.js';
import topFilmsRoute from './routes/topfilm.js';


// Chargement des variables d'environnement
dotenv.config();

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globaux
app.use(cors({ origin: 'http://localhost:3001' })); // autorise le front React
app.use(bodyParser.json());

// Connexion à la base de données (test immédiat à l'initialisation)
(async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM utilisateur');
    console.log("Connexion à la base de données réussie. Utilisateurs :", rows);
  } catch (err) {
    console.error('Erreur lors de la requête test à la BDD :', err);
  }
})();


app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});


// Utilisation des routes
app.use('/api/utilisateur', utilisateurRoute);
app.use('/api/film', filmRoute);
// app.use('/don', R_Don);
app.use('/review', reviewRoute);
app.use('/ajouter', R_ajoute);
app.use('/api/film/top', topFilmsRoute);
app.use('/api/realisateur', realisateurRoute);



// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend du projet !');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
});
