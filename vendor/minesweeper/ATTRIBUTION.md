# Vue-Tetris

https://github.com/reed-jones/minesweeper_js

https://github.com/reed-jones

[MIT License](http://opensource.org/licenses/MIT)

## Summary of use

The minesweeper_js repository is used in Kubercade as a Minesweeper-like game. The original repository's code was imported into the `vendor` directory and run as static files.

Some modifications were made to the original source code file `main.js` in order to facilitate integration with the Kubercade high-score system:

- A window alert in `addScores` was removed to prevent having a double alert on game win.

Additionally, the `winGame` function from `main.js` is patched upon game load without direct modification of the original code.
