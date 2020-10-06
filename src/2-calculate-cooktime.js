export const calculateCookTime = (numPizzas) => {
  if (numPizzas <= 2) {
    return 10;
  } else if (numPizzas >= 3 && numPizzas <= 5) {
    return 15;
  } else {
    return 20;
  }
};
