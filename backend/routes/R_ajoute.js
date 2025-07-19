const express = require('express');
const router = express.Router();

const { ajouterFilm } = require('../controlleur/C_ajoute');

router.post('/', ajouterFilm);  // <-- Pas d'appels ici, juste la fonction

module.exports = router;
