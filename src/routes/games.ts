import express from 'express';
const router: express.Router = express.Router();

router.use('/', express.static('vendor'));

export const games = router;
