# Pacman

https://github.com/luciopanepinto/pacman

https://github.com/luciopanepinto

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Summary of use

The pacman repository is used in Kubercade as a Pac-Man-like game. The original repository's code was imported into the `vendor` directory and run as static files.

In order to facilitate integration with the Kubercade high-score system, the `gameOver` function from `js/game.js` is patched upon game load without direct modification of the original code.
