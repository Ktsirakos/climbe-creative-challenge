import { ConnectFourBoardGame } from "./datamodel/datamodel";
import {
  convertDiagonalsIntoRows,
  getColumnFromCharacter,
  mirrorArrayFromRows,
} from "./helpers";

enum Winner {
  Yellow = "Yellow",
  Red = "Red",
  Draw = "Draw",
}

export enum Players {
  Yellow = "Y",
  Red = "R",
}

export function whoIsWinner(piecesPositionList: string[]): Winner {
  const game = new ConnectFourBoardGame();

  for (const move of piecesPositionList) {
    const [index, player] = move.split("_");
    const winner = game.addMoveToPlayer(
      player === "Yellow" ? Players.Yellow : Players.Red,
      getColumnFromCharacter(index)
    );

    if (winner) {
      return winner === "Y" ? Winner.Yellow : Winner.Red;
    }

    //Check diagonals for winner
    const diagonals = [
      ...convertDiagonalsIntoRows(game.getBoardRepresentation()),
      ...convertDiagonalsIntoRows(
        mirrorArrayFromRows(game.getBoardRepresentation())
      ),
    ];

    if (
      diagonals.includes(
        `${Players.Yellow}${Players.Yellow}${Players.Yellow}${Players.Yellow}`
      )
    ) {
      return Winner.Yellow;
    } else if (
      diagonals.includes(
        `${Players.Red}${Players.Red}${Players.Red}${Players.Red}`
      )
    ) {
      return Winner.Red;
    }
  }
  return Winner.Draw;
}
