import express from 'express';
const router: express.Router = express.Router();
import { scoresController } from '../controllers/scoresController';
import { check, sanitizeBody } from 'express-validator';

router.get('/:game_name', scoresController.getScores);
router.post(
  '/:game_name',
  [
    check('name')
      .isString()
      .isLength({ max: 80 }),
    check('score')
      .not()
      .isEmpty()
      .isInt(),
    sanitizeBody('name')
      .trim()
      .escape(),
    sanitizeBody('score').toInt(),
  ],
  scoresController.postScore
);

export const scores = router;
