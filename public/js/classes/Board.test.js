import Board from "./Board.js";

describe("Given a class", () => {
  describe("When it's called with a constructor and it receives 5 and 5", () => {
    test("Then it should return a nested array with bacteriums inside", () => {
      // Arrange
      const columns = 5;
      const rows = 5;
      const expectedType = "object";

      const board = new Board(columns, rows);

      for (let i = 0; i < board.boxes.length; i++) {
        for (let j = 0; j < board.boxes.length; j++) {
          expect(typeof board.boxes[i][j]).toBe(expectedType);
        }
      }
    });
  });
});
