import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Crée une connexion
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connexion
console.log('Connecté à MySQL avec ID de connexion :', connection.threadId);


export default connection;