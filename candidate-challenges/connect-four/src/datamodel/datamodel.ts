import { Players } from "../solution";

//Create class for the Stack
class ConnectFourStack {
  private array: string[] = ["", "", "", "", "", ""];
  constructor() {}

  public pushToStack(value: string) {
    this.array[this.array.indexOf("")] = value;
  }

  public popFromStack(): string | undefined {
    return this.array.pop();
  }

  public getArrayRepresentation(): string[] {
    return [...this.array].reverse();
  }

  public stackHasWinner(): string | undefined {
    const joinedStack = this.array.join("");
    if (joinedStack.includes("YYYY")) {
      return "Y";
    } else if (joinedStack.includes("RRRR")) {
      return "R";
    } else {
      return undefined;
    }
  }

  public getStackIndex(index: number): string {
    return this.array[index];
  }

  public getArray(): string[] {
    return this.array;
  }
}

//Class to represent the game needed!
export class ConnectFourBoardGame {
  private board: ConnectFourStack[] = [
    new ConnectFourStack(),
    new ConnectFourStack(),
    new ConnectFourStack(),
    new ConnectFourStack(),
    new ConnectFourStack(),
    new ConnectFourStack(),
    new ConnectFourStack(),
  ];

  constructor() {}

  public addMoveToPlayer(value: Players, index: number) {
    this.board[index].pushToStack(value);
    return this.checkWinner(value);
  }

  public checkWinner(playerToCheck: string) {
    //Check horizontally
    let row = "";
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        row += this.board[j].getStackIndex(i);
      }

      if (row.length >= 4) {
        //Check for winner
        if (
          row.includes(
            `${playerToCheck}${playerToCheck}${playerToCheck}${playerToCheck}`
          )
        ) {
          return playerToCheck;
        }
      } else {
        //Those lines are not yet filled in order to check
        break;
      }
    }

    //Check vertically
    for (const stack of this.board) {
      const value = stack.stackHasWinner();
      if (value) {
        return value;
      }
    }

    //Check diagonally
    const valuesForDiagonals = [];
    const array = this.getBoardRepresentation();
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {}
    }
    return false;
  }

  public getBoardRepresentation(): string[][] {
    return [
      this.board[0].getArray(),
      this.board[1].getArray(),
      this.board[2].getArray(),
      this.board[3].getArray(),
      this.board[4].getArray(),
      this.board[5].getArray(),
      this.board[6].getArray(),
    ];
  }
}
