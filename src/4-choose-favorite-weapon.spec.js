import { createdWeightWeaponsArray } from "./4-choose-favorite-weapon";

const weapons = [
  "knife",
  "sword",
  "revolver",
  "scythe",
  "hairpin",
  "lance",
  "word",
  "stereotype",
];

describe("4-choose-favorite-weapon", () => {
  it("should return an array with all weapons + more weapons on the specified kind", () => {
    const favoredWeapon = "knife";
    const favoredWeight = 12;
    const weightedWeaponsArray = createdWeightWeaponsArray(
      weapons,
      favoredWeapon,
      favoredWeight
    );

    // Count how many favored weapons we have in the array now
    const weaponsMatchingFavoredWeapon = weightedWeaponsArray.filter(
      (weapon) => weapon === favoredWeapon
    );
    const occurences = weaponsMatchingFavoredWeapon.length;

    expect([favoredWeight, favoredWeight + 1]).toContain(occurences);
    expect(weightedWeaponsArray.length).toEqual(weapons.length + favoredWeight);
  });
});
