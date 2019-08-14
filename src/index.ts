import express from 'express';
const app: express.Application = express();

function typeAnnotationTest(name: string) {
  return `Hello ${name}!`;
}

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const name: string = req.ip || 'World';
  res.send(typeAnnotationTest(name));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server listening on port', port);
});
