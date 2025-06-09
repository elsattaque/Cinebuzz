import { createConnection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Crée une connexion
const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err.stack);
    return;
  }
  console.log('Connecté à MySQL avec l’ID de connexion ' + connection.threadId);
});

export default connection;