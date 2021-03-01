// Clue board game
// Requirement: a mystery should have values for the weapon, killer, room

// Array - a list of things (no name)
//  mystery[0] - ??? weapon ??? room ???

// Object - a collection of information (with names)
//  mystery.weapon
//  mystery.room

/*
NOT READY
const mystery = {
    weapon: "",
    room: "",
    killer: ""
}

NOT READY
const mystery = {
    weapon: "wrench",
    room: "study",
    killer: ""
}

READY
const mystery = {
    weapon: "wrench",
    room: "study",
    killer: "mr. green"
}
*/

// Input: Receive mystery object
// Output:
//  True - if mystery is ready to be guessed
//  False - if mystery is not ready
export const isMysteryReady = (mystery) => {
  // Conditional to check if the test case passes
  //   if (mystery.killer && mystery.weapon && mystery.room) {
  //     return true;
  //   }
  //   return false;
  if (!mystery) {
    return false;
  }
  if (!mystery.killer) {
    return false;
  }
  if (!mystery.room) {
    return false;
  }
  if (!mystery.weapon) {
    return false;
  }
  return true;
};
