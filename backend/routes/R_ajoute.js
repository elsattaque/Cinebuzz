import express from 'express';
import { ajouterFilm } from '../controlleur/C_ajoute.js'; // ← extension .js obligatoire

const router = express.Router();

router.post('/', ajouterFilm);

export default router;
