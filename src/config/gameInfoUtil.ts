import { gameIndexConfigs } from './gameInfo.json';

/* Functions for converting between game index, code-safe game name,
and human-readable game name using gameIndex.json. */
export const gameInfoUtil = {
  indexToGame(index: number): string {
    const found = gameIndexConfigs.find(element => {
      return element.index === index;
    });
    if (found === undefined) {
      throw new Error(`Can't find game with index ${index}`);
    }
    return found.game;
  },
  indexToName(index: number): string {
    const found = gameIndexConfigs.find(element => {
      return element.index === index;
    });
    if (found === undefined) {
      throw new Error(`Can't find game with index ${index}`);
    }
    return found.name;
  },
  gameToIndex(game: string): number {
    const found = gameIndexConfigs.find(element => {
      return element.game === game;
    });
    if (found === undefined) {
      throw new Error(`Can't find game with game name ${game}`);
    }
    return found.index;
  },
  gameToName(game: string): string {
    const found = gameIndexConfigs.find(element => {
      return element.game === game;
    });
    if (found === undefined) {
      throw new Error(`Can't find game with game name ${game}`);
    }
    return found.name;
  },
};
