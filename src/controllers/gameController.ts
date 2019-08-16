import express from 'express';

export const gameController = {
  patchingMiddleware(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.originalUrl === '/games/pacman/file/to/patch') {
      // TODO: patch files
      res.send('patched_file.js');
    }
    next(); // use static serving for non-patched files
  },
};
