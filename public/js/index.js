import Bacterium from "./classes/Bacterium.js";
import Board from "./classes/Board.js";

const board = new Board(5, 5);
const stage = 0;

console.log(board);

/*
while (board.aliveBacteriums > 0) {
  for (let i = 0; i < board.boxes.length; i++) {
    for (let j = 0; j < board.boxes.length; j++) {
      if (board.boxes[i][j].isAlive === true) {
        board.boxes[i][j].isAlive++;
      } else {
        board.boxes[i][j].isAlive--;
      }
    }
  }
  stage++;
}


function knowNeighbours(bacterium) {
  const neighbours = [];

  neighbours[0].positionX = bacterium.positionX + 1;
  neighbours[0].positionY = bacterium.positionY - 1;

  neighbours[1].positionX = bacterium.positionX;
  neighbours[1].positionY = bacterium.positionY + 1;

  neighbours[2].positionX = bacterium.positionX + 1;
  neighbours[2].positionY = bacterium.positionY + 1;

  neighbours[3].positionX = bacterium.positionX + 1;
  neighbours[3].positionY = bacterium.positionY;

  neighbours[4].positionX = bacterium.positionX + 1;
  neighbours[4].positionY = bacterium.positionY - 1;

  neighbours[5].positionX = bacterium.positionX;
  neighbours[5].positionY = bacterium.positionY - 1;

  neighbours[6].positionX = bacterium.positionX - 1;
  neighbours[6].positionY = bacterium.positionY - 1;

  neighbours[7].positionX = bacterium.positionX - 1;
  neighbours[7].positionY = bacterium.positionY;

  return neighbours;
}

function reviewNeighbour (bacterium, neighbours) {
  if ()
}

function check(bacterium) {
  let count = 0;
  const neighbours = knowNeighbours(bacterium);

  if (reviewNeighbour(bacterium, neighboursOf()) === true) {
    count++;
  }
  return count;
}

*/
