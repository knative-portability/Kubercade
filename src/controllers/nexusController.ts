import express from 'express';
import { gameIndexConfigs } from '../config/gameInfo.json';

export const nexusController = {
  nexusIndex(req: express.Request, res: express.Response) {
    const gamesList = gameIndexConfigs.slice(1, gameIndexConfigs.length);
    res.render('nexus.pug', { gamesList });
  },
};
