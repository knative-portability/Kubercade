import express from 'express';
const router: express.Router = express.Router();
import { nexusController } from '../controllers/nexusController';

router.get('/', nexusController.nexusIndex);

export const nexus = router;
