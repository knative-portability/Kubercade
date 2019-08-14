import express from 'express';

export const scoresController = {
  getScores(req: express.Request, res: express.Response) {
    const gameName: string = req.params['game_name'];
    const gameIndex: number = gameNameToIndex(gameName);
    res.send(getScoresFromDB(gameIndex));
  },
};

function gameNameToIndex(gameName: string): number {
  // TODO actually convert
  return 1;
}

function getScoresFromDB(gameIndex: number): object {
  // TODO actually query the database
  return { scores: gameIndex };
}
