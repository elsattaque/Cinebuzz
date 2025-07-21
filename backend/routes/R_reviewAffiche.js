import express from 'express';
import { getFilmReviews } from './controlleur/c_reviewAffiche.js';

const router = express.Router();

router.get('/film/:id/reviews', getFilmReviews);

export default router;
