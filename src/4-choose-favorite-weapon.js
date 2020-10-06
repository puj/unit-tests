export const createdWeightWeaponsArray = (weapons, favorite, weight) => {
  return [...weapons, ...new Array(weight).fill(favorite)];
};
