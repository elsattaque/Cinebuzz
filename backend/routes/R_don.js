const express = require('express');
const router = express.Router();
const controller = require('../controlleur/C_don');

router.get('/film/:id', controller.getLienDonByFilmId);

module.exports = router;
