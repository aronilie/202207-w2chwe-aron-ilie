import Bacterium from "./Bacterium.js";

class Board {
  columns;
  rows;
  boxes;

  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;

    this.boxes = this.createBoxes();
  }

  createBoxes() {
    const boxes = new Array(this.columns).fill(
      new Array(this.rows).fill(new Bacterium(this.getRandomStatus()))
    );

    return boxes;
  }

  getRandomStatus() {
    let number;
    this.number = Math.random();

    if (number > 0.5) {
      return true;
    }
    return false;
  }
}

export default Board;
