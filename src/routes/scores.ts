import express from 'express';
const router: express.Router = express.Router();
import { scoresController } from '../controllers/scoresController';

router.get('/:game_name', scoresController.getScores);

export const scores = router;
