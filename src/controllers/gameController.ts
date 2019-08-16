import express from 'express';

export const gameController = {
  patchingMiddleware(req, res, next) {
    if(req.originalUrl === '/games/pacman/files/to/patch') {
      // TODO: patch files
      res.send('patched_file.js');
    }
    next();  // use static serving for non-patched files
  },
};
