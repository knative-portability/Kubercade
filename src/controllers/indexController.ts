import express from 'express';
import { gameIndexConfigs } from '../config/gameInfo.json';

export const indexController = {
  index(req: express.Request, res: express.Response) {
    const gamesList = gameIndexConfigs.slice(1);
    res.render('index.pug', { gamesList });
  },
};

function typeAnnotationTest(name: string): string {
  return `Hello ${name}!`;
}
