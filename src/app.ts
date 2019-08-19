import express from 'express';
const app: express.Application = express();
import { index } from './routes/index';
import { nexus } from './routes/nexus';
import { scores } from './routes/scores';
import { chat } from './routes/chat';

app.set('view engine', 'pug');
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', index);
app.use('/nexus', nexus);
app.use('/scores', scores);
app.use('/chat', chat);

const port: number = Number(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log('Server listening on port', port);
});

export { app };
