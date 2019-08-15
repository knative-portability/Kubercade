import express from 'express';

export const indexController = {
  index(req: express.Request, res: express.Response) {
    console.log('Index received a request.');

    res.render('index.pug', {
      game: 'Pac-Man',
    });
  },
};

function typeAnnotationTest(name: string): string {
  return `Hello ${name}!`;
}
