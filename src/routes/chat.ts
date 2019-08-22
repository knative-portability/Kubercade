import express from 'express';
const router: express.Router = express.Router();
import { chatController } from '../controllers/chatController';

router.get('/:game_name', chatController.getChat);
router.post('/:game_name', chatController.postToChat);

export const chat = router;
