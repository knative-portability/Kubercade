import express from 'express';
const router: express.Router = express.Router();
import { indexController } from '../controllers/indexController';

router.get('/', indexController.index);

export const index = router;
