import express from 'express';
import { util } from '../config/gameInfoUtil';
import pg from 'pg';
import { parse } from 'pg-connection-string';

const dbUrl: string = process.env.DB_URL || '';
const config: object = parse(dbUrl);
const pool = new pg.Pool(config);
pool.connect();

export const scoresController = {
  getScores(req: express.Request, res: express.Response) {
    const internalGameName: string = req.params['game_name'];
    const gameIndex: number = util.gameToIndex(internalGameName);
    const scores = getScoresFromDB(gameIndex);
    const prettyGameName: string = util.gameToName(internalGameName);
    res.render('scores.pug', { scores, prettyGameName });
  },
  postScore(req: express.Request, res: express.Response) {
    const internalGameName: string = req.params['game_name'];
    const gameIndex: number = util.gameToIndex(internalGameName);
    const name = req.body.name;
    const score = req.body.score;
    postScoreToDB(gameIndex, score, name);
  },
};

async function getScoresFromDB(gameIndex: number) {
  try {
    const res = await pool.query(
      `SELECT *
      FROM kubercade.high_score_table
      WHERE game_index=$1
      ORDER BY score DESC`,
      [gameIndex]
    );
    return { scores: res.rows };
  } catch (err) {
    console.log('Query error');
    console.log(err.stack);
    throw err;
  }
}

function getCurrentTime(): string {
  const today = new Date();
  const date = `${today.getMonth()}-${today.getDate()}-${today.getFullYear()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return `${date} ${time}`;
}

async function postScoreToDB(gameIndex: number, score: number, name: string) {
  try {
    const res = await pool.query(
      `INSERT INTO kubercade.high_score_table (game_index, name, score, datetime)
      VALUES ($1, $2, $3, $4)`,
      [gameIndex, name, score, getCurrentTime()]
    );
  } catch (err) {
    console.log('Query error');
    console.log(err.stack);
    throw err;
  }
}
