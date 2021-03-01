import { isMysteryReady } from './1-mystery-ready';

describe('1-mystery-ready', () => {
  it('if mystery object is empty object, it should not be ready', () => {
    expect(isMysteryReady({})).toBe(false);
  });

  const validMysteryObject = {
    killer: 'mr. green',
    weapon: 'wrench',
    room: 'kitchen',
  };
  it('if mystery object has all information, it should be ready', () => {
    expect(isMysteryReady(validMysteryObject)).toBe(true);
  });

  const emptyStringMystery = {
    killer: '',
    weapon: '',
    room: '',
  };
  it('if mystery object has empty string values, it should be not ready', () => {
    expect(isMysteryReady(emptyStringMystery)).toBe(false);
  });

  const oneUndefinedMystery = {
    killer: undefined,
    weapon: 'pipe',
    room: 'conservatory',
  };
  it('if mystery object has any empty values, it should be not ready', () => {
    expect(isMysteryReady(oneUndefinedMystery)).toBe(false);
  });
});
