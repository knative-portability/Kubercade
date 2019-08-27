import express from 'express';
import { gameInfoUtil } from '../config/gameInfoUtil';
import { timeUtil } from '../config/timeUtil';
import pg from 'pg';
import { parse } from 'pg-connection-string';
import { validationResult } from 'express-validator';
require('dotenv').config();

const dbUrl: string = process.env.DB_URL || '';
const config: object = parse(dbUrl);
const pool = new pg.Pool(config);
pool.connect();

const ascScoreGames = ['minesweeper'];

export const scoresController = {
  /**
   * Get all scores for the game_name specified.
   * Sends the results as a rendered Pug template.
   * @param req Request object
   * @param res Response object
   */
  async getScores(req: express.Request, res: express.Response) {
    const internalGameName: string = req.params['game_name'];
    const userScore: number = req.query['user_score'];
    const gameIndex: number = gameInfoUtil.gameToIndex(internalGameName);
    const asc = ascScoreGames.includes(internalGameName) ? true : false;
    const scores = await getScoresFromDB(gameIndex, asc);
    const prettyGameName: string = gameInfoUtil.gameToName(internalGameName);
    res.render('scores.pug', {
      scores,
      internalGameName,
      prettyGameName,
      userScore,
    });
  },
  postScore(req: express.Request, res: express.Response) {
    // validate checks from src/routes/scores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const internalGameName: string = req.params['game_name'];
    const gameIndex: number = gameInfoUtil.gameToIndex(internalGameName);
    const name: string = req.body.name;
    const score: number = req.body.score;
    postScoreToDB(gameIndex, score, name).then(() => {
      res.send('Successfully added score.');
    });
  },
};

/**
 * Queries the db to get all scores for a given game.
 * @param gameIndex Index of game from ../config/gameInfo.json
 * @returns {Promise<object[]>} Returned rows
 * @throws Error from querying the database
 */
async function getScoresFromDB(
  gameIndex: number,
  sortAsc: boolean
): Promise<object[]> {
  try {
    const sortOrder = sortAsc ? 'ASC' : 'DESC';
    const res = await pool.query(
      `SELECT *
      FROM kubercade.high_score_table
      WHERE game_index=$1
      ORDER BY score ${sortOrder}, datetime DESC;`,
      [gameIndex]
    );
    return timeUtil.formatTimes(res.rows);
  } catch (err) {
    console.log('Query error: ' + err.message);
    console.log(err.stack);
    throw err;
  }
}

async function postScoreToDB(gameIndex: number, score: number, name: string) {
  try {
    const res = await pool.query(
      `INSERT INTO kubercade.high_score_table (game_index, name, score, datetime)
      VALUES ($1, $2, $3, NOW())`,
      [gameIndex, name, score]
    );
    return res;
  } catch (err) {
    console.log('Query error: ' + err.message);
    console.log(err.stack);
    throw err;
  }
}
