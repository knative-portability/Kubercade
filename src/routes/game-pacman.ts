import express from 'express';
const router: express.Router = express.Router();
import { gameController } from '../controllers/gameController';

router.get('/game/pacman', gameController.pacman);

export const pacman = router;
