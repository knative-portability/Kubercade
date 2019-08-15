import express from 'express';

export const gameController = {
  pacman(req: express.Request, res: express.Response) {
    console.log('Pacman received a request.');

    res.send("Pacman game here");
  },
};
