import Box from "./classes/Bacterium.js";

const totalBoxes = 9;
let i = 0;
const grid = [];
grid[0] = 1;

for (i = 0; i <= totalBoxes; i++) {
  grid[i] = new Box(i);
}

console.log("hola");
console.log(grid[1].id);
