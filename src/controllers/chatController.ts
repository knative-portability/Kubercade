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

export const chatController = {
  /**
   * Get all chat messages for the game_name specified.
   * Sends the results as JSON.
   * @param req Request object
   * @param res Response object
   */
  async getChat(req: express.Request, res: express.Response) {
    const gameName: string = req.params['game_name'];
    const gameIndex: number = gameInfoUtil.gameToIndex(gameName);
    res.send(await getChatFromDB(gameIndex));
  },
  /**
   * Get all chat messages for the game_name specified.
   * Sends the results as JSON.
   * @param req Request object
   * @param res Response object
   */
  async postToChat(req: express.Request, res: express.Response) {
    // validate checks from src/routes/chat
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const gameName: string = req.params['game_name'];
    const gameIndex: number = gameInfoUtil.gameToIndex(gameName);
    const name: string = req.body.name || 'anonymous';
    const message: string = req.body.message;
    postChatMessageToDB(gameIndex, name, message);
    res.status(201).send('Successfully posted to chat.');
  },
};

/**
 * Queries the db to get all chat messages for a given game.
 * @param gameIndex Index of game from ../config/gameInfo.json
 * @returns {Promise<object[]>} Returned rows
 * @throws Error from querying the database
 */
async function getChatFromDB(gameIndex: number): Promise<object[]> {
  try {
    const res = await pool.query(
      `SELECT * 
      FROM kubercade.chat_table
      WHERE game_index=$1
      ORDER BY datetime DESC`,
      [gameIndex]
    );
    return timeUtil.formatTimes(res.rows);
  } catch (err) {
    console.log('Query error');
    console.log(err.stack);
    throw err;
  }
}

/**
 * Posts a chat message to the chat database.
 * @param gameIndex Index of game from ../config/gameInfo.json
 * @param name Name of message poster
 * @param message Message text
 */
async function postChatMessageToDB(
  gameIndex: number,
  name: string,
  message: string
) {
  try {
    await pool.query(
      `INSERT INTO kubercade.chat_table (game_index, name, message, datetime)
      VALUES ($1, $2, $3, NOW())`,
      [gameIndex, name, message]
    );
  } catch (err) {
    console.log('Query error: ' + err.message);
    console.log(err.stack);
    throw err;
  }
}
