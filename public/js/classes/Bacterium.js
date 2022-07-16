class Bacterium {
  id;
  positionX;
  positionY;
  isAlive;
  willBeAlive;

  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }
}

export default Bacterium;
