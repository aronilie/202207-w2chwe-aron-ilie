import Bacterium from "./Bacterium.js";

describe("Given a class", () => {
  describe("When is created a new instance of this class with the parameter 'true'", () => {
    test("Then it should create a new instance of Bacterium with the property isAlive with the value 'true'", () => {
      const isAliveValue = true;
      const expectedValue = true;

      const bacterium = new Bacterium(isAliveValue);

      expect(bacterium.isAlive).toBe(expectedValue);
    });
  });
});
