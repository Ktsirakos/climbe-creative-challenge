import { ConnectFourBoardGame } from "./datamodel/datamodel";

export function getColumnFromCharacter(value: string): number {
  const availableCharacters = ["A", "B", "C", "D", "E", "F", "G"];
  return availableCharacters.indexOf(value);
}

export function convertDiagonalsIntoRows(
  board: ConnectFourBoardGame
): string[] {
  return [""];
}
