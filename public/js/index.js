import Box from "./classes/Box.js";
import Board from "./classes/Board.js";

const board = new Board(40, 40);

console.log(board.boxes);

for (let i = 0; i < 30; i++) {
  console.log(Math.random());
}
