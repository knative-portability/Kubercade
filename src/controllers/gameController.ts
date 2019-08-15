import express from 'express';

const gameServes {
  pacman(req: express.Request, res: express.Response) {
    console.log('Pacman received a request.');

    res.send('Pacman game here.');
  },
};


export const gameController = {
  getGame(req: express.Request, res: express.Response) {
    console.log('Controller was called');

    const internalGameName: string = req.params['game_name'];
    gameServes.pacman(req, res);
  },
};
