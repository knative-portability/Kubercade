import express from 'express';
const router: express.Router = express.Router();
import { indexController } from '../controllers/indexController';
import { indexController } from '../controllers/scoresController

router.get('/', indexController.index);

export const index = router;
