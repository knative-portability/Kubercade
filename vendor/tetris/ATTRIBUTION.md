# Vue-Tetris

https://github.com/Binaryify/vue-tetris

https://github.com/Binaryify

[MIT License](http://opensource.org/licenses/MIT)

## Summary of use

The Vue-Tetris repository is used in Kubercade as a Tetris-like game. The original repository's dependencies were installed using `npm install`, it was built with `npm run build`, and its built files from its `dist` directory are included in this directory.

Some modifications were made to the original source code file `/src/control/states.js` in order to facilitate integration with the Kubercade high-score system:

- A `gameOverSignal` function is attached to the `window` for access by Kubercade's front-end JavaScript.
- On losing the game, `window.gameOverSignal` is called to signal game is over.
- On the score changing, `window.score` is updated to match the current score.
