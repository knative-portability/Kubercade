import express from 'express';

import { pacmanContent } from '../games/pacman';

function pacman(req: express.Request, res: express.Response) {
  res.redirect('/static/pacman/index.html');
}

export const gameController = {
  getGame(req: express.Request, res: express.Response) {
    console.log('Controller was called');

    const internalGameName: string = req.params['game_name'];
    pacman(req, res);
  },
};
