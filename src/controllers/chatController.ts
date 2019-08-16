import express from 'express';
import { util } from '../config/gameInfoUtil';
import pg from 'pg';
import { parse } from 'pg-connection-string';
require('dotenv').config();

const dbUrl: string = process.env.DB_URL || '';
const config: object = parse(dbUrl);
const pool = new pg.Pool(config);
pool.connect();

export const chatController = {
  async getChat(req: express.Request, res: express.Response) {
    const internalGameName: string = req.params['game_name'];
    const gameIndex: number = util.gameToIndex(internalGameName);
    res.send(await getChatFromDB(gameIndex));
  },
};

async function getChatFromDB(gameIndex: number) {
  try {
    const res = await pool.query(
      `SELECT * 
      FROM kubercade.chat_table
      WHERE game_index=$1
      ORDER BY datetime DESC`,
      [gameIndex]
    );
    return res.rows;
  } catch (err) {
    console.log('Query error');
    console.log(err.stack);
    throw err;
  }
}
