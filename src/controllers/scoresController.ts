import express from 'express';
import pg from 'pg';
import { parse } from 'pg-connection-string';
require('dotenv').config();

const dbUrl: string = process.env.DB_URL || '';
const config: object = parse(dbUrl);
const pool = new pg.Pool(config);
pool.connect();

export const scoresController = {
  getScores(req: express.Request, res: express.Response) {
    const gameName: string = req.params['game_name'];
    const gameIndex: number = gameNameToIndex(gameName);
    res.send(getScoresFromDB(gameIndex));
  },
};

function gameNameToIndex(gameName: string): number {
  // TODO actually convert it
  return 1;
}

function getScoresFromDB(gameIndex: number) {
  pool.query(
    'SELECT * FROM high_score_table WHERE game_index = $1',
    [gameIndex],
    (err, res) => {
      if (err) {
        throw err;
      }
      return res.rows;
    }
  );
}
