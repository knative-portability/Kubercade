import express from 'express';

const gameServes = {
  pacman(req: express.Request, res: express.Response) {
    res.redirect('/static/pacman/index.html');
  },
};

export const gameController = {
  getGame(req: express.Request, res: express.Response) {
    const internalGameName: string = req.params['game_name'];
    const game = gameServes[internalGameName];
    game(req, res);
  },
};
