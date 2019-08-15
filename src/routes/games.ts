import express from 'express';
const router: express.Router = express.Router();
import { gameController } from '../controllers/gameController';

router.get('/:game_name', gameController.getGame);

export const games = router;
