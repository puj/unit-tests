export const isMysteryReady = (mystery) => {
  if (mystery === null) {
    return false;
  }

  const mysteryValues = Object.values(mystery);
  console.log(`Values ${mysteryValues}`);

  const nonNullValues = mysteryValues.filter((val) => val !== null);
  console.log(`Filtered Values ${nonNullValues}`);

  const numNonNulls = nonNullValues.length;
  console.log(`Length ${numNonNulls}`);

  return numNonNulls === 3;

  // // Use fail fast
  // if (mystery === null) {
  //   return false;
  // }

  // return Object.values(mystery).every((val) => val !== null);

  // return (
  //   mystery !== null && Object.values(mystery).every((val) => val !== null)
  // );

  // return (
  //   mystery !== null && Object.values(mystery).every((val) => val !== null)
  // );

  // return (
  //   mystery !== null && Object.values(mystery).filter((val) => val).length === 3
  // );

  // if (mystery === null) {
  //   return false;
  // }

  // if (mystery.killer === null) {
  //   return false;
  // }

  // if (mystery.weapon === null) {
  //   return false;
  // }

  // if (mystery.room === null) {
  //   return false;
  // }

  // return true;

  // if (
  //   mystery !== null &&
  //   mystery.killer !== null &&
  //   mystery.weapon !== null &&
  //   mystery.room !== null
  // ) {
  //   return true;
  // }

  // return false;
};
