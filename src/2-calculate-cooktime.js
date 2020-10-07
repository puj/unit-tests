// Precondition - numPizzas > 0 && numPizzas < 20

// 1-2 pizzas : The pizzas will take 10 minutes
// 3-5 pizzas : The pizzas will take 15 minutes
// 5-6 pizzas : The pizzas will take 18 minutes
// 7+ pizzas : The pizzas will take 20 minutes

export const calculateCookTime = (numPizzas) => {
  if (isAnimal()) {
    if (isCarnivorous()) {
    } else if (isHerbivore()) {
    } else {
    }
  } else {
    if (isTropical()) {
    } else if (isDesert()) {
    }
  }

  if (numPizzas >= 7) {
    return 20;
  }

  if (numPizzas >= 5) {
    return 18;
  }

  if (numPizzas >= 3) {
    return 15;
  }

  if (numPizzas >= 1) {
    return 10;
  }

  return 0;

  //   if (numPizzas <= 2) {
  //     return 10;
  //   } else if (numPizzas >= 3 && numPizzas <= 5) {
  //     return 15;
  //   } else {
  //     return 20;
  //   }
};
