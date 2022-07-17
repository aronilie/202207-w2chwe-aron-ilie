import Bacterium from "./Bacterium.js";

class Board {
  columns;
  rows;
  boxes;
  aliveBacteriums;

  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;

    this.boxes = this.createBoxes();
  }

  createBoxes() {
    const boxes = new Array(this.columns);

    for (let i = 0; i < boxes.length; i++) {
      boxes[i] = new Array(this.rows);
    }

    for (let i = 0; i < boxes.length; i++) {
      for (let j = 0; j < boxes.length; j++) {
        boxes[i][j] = new Bacterium(this.getRandomStatus());
      }
    }

    return boxes;
  }

  getRandomStatus = () => Math.random() > 0.5;
}

export default Board;
