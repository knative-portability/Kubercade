import express from 'express';
const app: express.Application = express();
import { index } from './routes/index';
import { pacman } from './routes/game-pacman';

app.set('view engine', 'pug');

app.use('/', index);
app.use('/game/pacman', pacman);

const port: number = Number(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log('Server listening on port', port);
});

module.exports = app;
