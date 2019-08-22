import express from 'express';
const router: express.Router = express.Router();
import { chatController } from '../controllers/chatController';
import { check, sanitizeBody } from 'express-validator';

router.get('/:game_name', chatController.getChat);
router.post(
  '/:game_name',
  [
    check('name')
      .isString()
      .isLength({ max: 80 }),
    check('message')
      .isString()
      .not()
      .isEmpty()
      .isLength({ max: 400 }),
    sanitizeBody('name')
      .trim()
      .escape(),
    sanitizeBody('message')
      .trim()
      .escape(),
  ],
  chatController.postToChat
);

export const chat = router;
