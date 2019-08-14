import express from 'express';
const router: express.Router = express.Router();

router.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const name: string = req.ip || 'World';
  res.send(typeAnnotationTest(name));
});

function typeAnnotationTest(name: string): string {
  return `Hello ${name}!`;
}

export const index = router;
