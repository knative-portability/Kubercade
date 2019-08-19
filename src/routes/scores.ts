import express from 'express';
const router: express.Router = express.Router();
import { scoresController } from '../controllers/scoresController';

router.get('/:game_name', scoresController.getScores);
router.post('/:game_name', scoresController.postScore);

export const scores = router;
