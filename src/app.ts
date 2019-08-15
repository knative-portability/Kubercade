import express from 'express';
const app: express.Application = express();
import { index } from './routes/index';
import { scores } from './routes/scores';
import { games } from './routes/games';

app.set('view engine', 'pug');
app.use('/static', express.static('public'))

app.use('/', index);
app.use('/scores', scores);
app.use('/games', games);

const port: number = Number(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log('Server listening on port', port);
});

export { app };
