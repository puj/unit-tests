import { calculateCookTime } from './2-calculate-cooktime';
// 1-2 pizzas : The pizzas will take 10 minutes
// 3-5 pizzas : The pizzas will take 15 minutes
// 6+ pizzas : The pizzas will take 20 minutes

describe('2-calculate-cooktime', () => {
  it('should return 10 min for 1 pizza', () => {
    const numPizzas = 1;
    expect(calculateCookTime(numPizzas)).toBe(10);
  });

  it('should return 10 min for 2 pizzas', () => {
    const numPizzas = 2;
    expect(calculateCookTime(numPizzas)).toBe(10);
  });

  it('should return 15 min for 3 pizzas', () => {
    const numPizzas = 3;
    expect(calculateCookTime(numPizzas)).toBe(15);
  });

  it('should return 18 min for 5 pizzas', () => {
    const numPizzas = 5;
    expect(calculateCookTime(numPizzas)).toBe(18);
  });

  it('should return 18 min for 6 pizzas', () => {
    const numPizzas = 6;
    expect(calculateCookTime(numPizzas)).toBe(18);
  });

  it('should return 20 min for 7 pizzas', () => {
    const numPizzas = 7;
    expect(calculateCookTime(numPizzas)).toBe(20);
  });

  it('should return 0 min for 0 or fewer pizzas', () => {
    const numPizzas = -1;
    expect(calculateCookTime(numPizzas)).toBe(0);
  });
});
