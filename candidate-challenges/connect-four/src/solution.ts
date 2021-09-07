import { ConnectFourBoardGame } from "./datamodel/datamodel";
import { getColumnFromCharacter } from "./helpers";

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
    console.log(index, player);
    const winner = game.addMoveToPlayer(
      player === "Yellow" ? Players.Yellow : Players.Red,
      getColumnFromCharacter(index)
    );

    if (winner) {
      console.log("We have a winner", winner);
      return winner === "Y" ? Winner.Yellow : Winner.Red;
    }

    console.log(game.getBoardRepresentation());
  }

  return Winner.Draw;
}

whoIsWinner([
  "C_Yellow",
  "E_Red",
  "G_Yellow",
  "B_Red",
  "D_Yellow",
  "B_Red",
  "B_Yellow",
  "G_Red",
  "C_Yellow",
  "C_Red",
  "D_Yellow",
  "F_Red",
  "E_Yellow",
  "A_Red",
  "A_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "F_Yellow",
  "D_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "A_Red",
  "G_Yellow",
  "D_Red",
  "D_Yellow",
  "C_Red",
]);
//Create class for the Stack
