class TicTacToe {
  constructor() {}
  matrix = [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
  ];
  rowLength = 3;
  currentPlayer = 0;
  end = 0;
  getCurrentPlayerSymbol() {
    if (this.currentPlayer === 0) {
      return "x";
    } else {
      return "o";
    }
  }
  checkMainDiag(player) {
    let win = 0;
    for (let i = 0; i < this.rowLength; i++) {
      if (this.getFieldValue(i, i) === player) {
        win++;
      }
      if (win === this.rowLength) return player;
      else return false;
    }
  }
  checkAsDiag(player) {
    let win = 0;
    for (let i = 0; i < this.rowLength; i++) {
      if (this.getFieldValue(i, this.rowLength - 1 - i) === player) {
        win++;
      }
    }
    if (win === 3) return player;
    else return false;
  }
  checkWinDiag() {
    return (
      this.checkMainDiag("o") ||
      this.checkMainDiag("x") ||
      this.checkAsDiag("o") ||
      this.checkAsDiag("x")
    );
  }
  checkWinLine() {
    for (let i = 0; i < this.rowLength; i++) {
      if (this.matrix[i].every((el) => el === "x")) return "x";
    }
    for (let i = 0; i < this.rowLength; i++) {
      if (this.matrix[i].every((el) => el === "o")) return "o";
    }
    return false;
  }
  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === this.rowLength) {
      this.matrix[rowIndex].splice(
        columnIndex,
        1,
        this.getCurrentPlayerSymbol()
      );
      if (this.currentPlayer) {
        this.currentPlayer = 0;
      } else {
        this.currentPlayer = 1;
      }
      this.end++;
    }
  }

  isFinished() {
    if (this.noMoreTurns() || this.getWinner()) return true;
    else return false;
  }

  getWinner() {
    return this.checkWinLine() || this.checkWinDiag();
  }

  noMoreTurns() {
    if (this.end === 9) return true;
    else return false;
  }

  isDraw() {
    if (!this.noMoreTurns() || this.getWinner()) return false;
    else return true;
  }

  getFieldValue(rowIndex, colIndex) {
    if (
      this.matrix[rowIndex][colIndex] === "o" ||
      this.matrix[rowIndex][colIndex] === "x"
    )
      return this.matrix[rowIndex][colIndex];
    else return null;
  }
}
game = new TicTacToe();
//1422
game = new TicTacToe();
game.nextTurn(1, 0);

game.nextTurn(1, 2);

game.nextTurn(2, 1);

game.nextTurn(1, 2);

game.nextTurn(1, 1);

game.nextTurn(0, 1);

game.nextTurn(2, 0);

game.nextTurn(0, 1);

game.nextTurn(2, 2);

game.nextTurn(0, 1);

game.nextTurn(1, 1);

game.nextTurn(2, 0);

game.nextTurn(0, 2);

console.log(game.getWinner());
module.exports = TicTacToe;
