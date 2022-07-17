class Bacterium {
  positionX;
  positionY;
  isAlive;
  willBeAlive;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

export default Bacterium;
