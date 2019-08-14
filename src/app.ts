import express from 'express';
const app: express.Application = express();

app.use('/', require('./routes/index'));

const port: number = Number(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log('Server listening on port', port);
});

module.exports = app;
