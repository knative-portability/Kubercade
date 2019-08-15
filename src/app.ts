import express from 'express';
const app: express.Application = express();
import { index } from './routes/index';
import { scores } from './routes/scores';

app.set('view engine', 'pug');

app.set('view engine', 'pug');

app.use('/', index);
app.use('/scores', scores);

const port: number = Number(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log('Server listening on port', port);
});

export { app };
