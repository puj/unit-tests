import { isMysteryReady } from "./1-is-mystery-ready";

const emptyMystery = {
  killer: null,
  weapon: null,
  room: null,
};
const partialMystery = {
  killer: "Mr. Green",
  weapon: { name: "Axe" },
  room: null,
};
const filledMystery = {
  killer: "Mr. Green",
  weapon: { name: "Axe" },
  room: "Conservatory",
};

describe("1-mystery-ready", () => {
  it("if mystery is null, it should not be ready", () => {
    expect(isMysteryReady(null)).toBe(false);
  });

  it("if no value is initialized in mystery, it should not be ready", () => {
    expect(isMysteryReady(emptyMystery)).toBe(false);
  });

  it("if not all values are initialized in mystery, it should not be ready", () => {
    expect(isMysteryReady(partialMystery)).toBe(false);
  });

  it("if all values are initialized in mystery, it should be ready", () => {
    expect(isMysteryReady(filledMystery)).toBe(true);
  });
});
