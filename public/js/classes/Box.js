let counter = 0;

class Box {
  id;
  positionX;
  positionY;

  constructor() {
    this.id = counter;
    counter++;
  }
}

export default Box;
