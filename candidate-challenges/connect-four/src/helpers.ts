import { ConnectFourBoardGame } from "./datamodel/datamodel";

export function getColumnFromCharacter(value: string): number {
  const availableCharacters = ["A", "B", "C", "D", "E", "F", "G"];
  return availableCharacters.indexOf(value);
}

export function convertDiagonalsIntoRows(board: string[][]): string[] {
  const diagonals = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
  for (let value = -5; value < 5; value++) {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        if (i - j === value) {
          diagonals[value + 5] += board[i][j];
        }
      }
    }
  }

  return diagonals.filter((elem) => elem.length >= 4);
}

export function mirrorArrayFromRows(boardRepresentation: string[][]) {
  const newData = [];
  for (var i = 0; i < boardRepresentation.length; i++) {
    newData.push(boardRepresentation[boardRepresentation.length - (i + 1)]);
  }
  return newData;
}
