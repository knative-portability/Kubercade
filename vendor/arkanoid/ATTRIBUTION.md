# ball-and-wall

https://github.com/budnix/ball-and-wall

https://github.com/budnix

[MIT License](http://opensource.org/licenses/MIT)

## Summary of use

The ball-and-wall repository is used in Kubercade as an Arkanoid-type game. The original repository with its dependencies installed using `bower install` is included in this directory.

Some modifications were made to the original source code in order to facilitate integration with the Kubercade high-score system:

* In `js/index.js`, a `gameOverSignal` function is attached to the `window`.
* In `js/app/game.js`, `window.gameOverSignal` is called whenever the game is over (either lost the game or beat the level).
* In `js/app/dashboard/score.js`, `DashboardScore.prototype._updateScore` sets `window.score` to match the current score. 
