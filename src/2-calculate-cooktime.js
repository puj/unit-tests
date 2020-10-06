// 1-2 pizzas: The pizzas will take 10 minutes.
// 3-5 pizzas: The pizzas will take 15 minutes.
// 6+ pizzas: The pizzas will take 20 minutes.

export const calculateCookTime = (numPizzas) => {
  if (numPizzas > 5) {
    return 20;
  }

  if (numPizzas > 2) {
    return 15;
  }

  if (numPizzas > 0) {
    return 10;
  }
  // What about 0???
  // New test case?  What should be the result??

  //==ALTERNATIVE==
  // if (numPizzas <= 2) {
  //   return 10;
  // } else if (numPizzas >= 3 && numPizzas <= 5) {
  //   return 15;
  // } else {
  //   return 20;
  // }

  // ==ALTERNATIVE==
  // if (numPizzas > 5) {
  //   return 20;
  // }

  // if (numPizzas > 2) {
  //   return 15;
  // }

  // if (numPizzas > 0) {
  //   return 10;
  // }
};
