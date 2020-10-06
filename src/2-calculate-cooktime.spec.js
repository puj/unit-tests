import { calculateCookTime } from "./2-calculate-cooktime";

describe("2-calculate-cooktime", () => {
  it("should return 10 minutes for 1 pizza", () => {
    const numPizzas = 1;
    expect(calculateCookTime(numPizzas)).toBe(10);
  });
  it("should return 10 minutes for 2 pizza", () => {
    const numPizzas = 2;
    expect(calculateCookTime(numPizzas)).toBe(10);
  });
  it("should return 15 minutes for 3 pizza", () => {
    const numPizzas = 3;
    expect(calculateCookTime(numPizzas)).toBe(15);
  });
  it("should return 15 minutes for 5 pizza", () => {
    const numPizzas = 5;
    expect(calculateCookTime(numPizzas)).toBe(15);
  });
  it("should return 20 minutes for 6 pizza", () => {
    const numPizzas = 6;
    expect(calculateCookTime(numPizzas)).toBe(20);
  });

  // What happens for -1
});
