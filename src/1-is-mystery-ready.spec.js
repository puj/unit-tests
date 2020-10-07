const { isMysteryReady } = require('./1-is-mystery-ready');

const emptyMystery = {
  killer: null,
  weapon: null,
  room: null,
};

const partialMystery = {
  killer: 'Mr. Green',
  weapon: null,
  room: 'Conservatory',
};

const filledMystery = {
  killer: 'Mr. Green',
  weapon: 'Axe',
  room: 'Conservatory',
};

describe('1-mystery-ready', () => {
  it('should return false if mystery is null', () => {
    expect(isMysteryReady(null)).toBe(false);
  });

  it('should return false if mystery contains all null values', () => {
    expect(isMysteryReady(emptyMystery)).toBe(false);
  });

  it('should return false if mystery contains some null values', () => {
    expect(isMysteryReady(partialMystery)).toBe(false);
  });

  it('should return true if mystery contains all non-null values', () => {
    expect(isMysteryReady(filledMystery)).toBe(true);
  });
});
