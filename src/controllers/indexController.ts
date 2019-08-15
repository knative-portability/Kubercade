import express from 'express';

export const indexController = {
  index(req: express.Request, res: express.Response) {
    res.render('index.pug', {
      game: 'Pac-Man',
    });
  },
};

function typeAnnotationTest(name: string): string {
  return `Hello ${name}!`;
}
