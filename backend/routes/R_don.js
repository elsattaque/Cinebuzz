import express from 'express';
import controller from '../controlleur/C_don.js';

const router = express.Router();

router.get('/film/:id', controller.getLienDonByFilmId);

export default router;
