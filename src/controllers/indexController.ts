import express from 'express';

export const indexController = {
  index(req: express.Request, res: express.Response) {
    console.log('Hello world received a request.');

    const name: string = req.ip || 'World';
    res.send(typeAnnotationTest(name));
  },
};

function typeAnnotationTest(name: string): string {
  return `Hello ${name}!`;
}
