const express = require('express');
const router = express.Router();
const controller = require('../controlleur/C_film');

router.get('/:id', controller.getFilmById);  

module.exports = router;
