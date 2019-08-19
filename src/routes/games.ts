import express from 'express';
const router: express.Router = express.Router();
import { gameController } from '../controllers/gameController';

router.use('/', gameController.patchingMiddleware);
router.use('/', express.static('vendor'));

export const games = router;
