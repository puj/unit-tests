export const isMysteryReady = (mystery) => {
  // return (
  //   mystery !== null &&
  //   mystery.killer !== null &&
  //   mystery.room !== null &&
  //   mystery.weapon != null
  // );

  if (mystery === null) {
    return false;
  }

  if (mystery.killer === null) {
    return false;
  }

  if (mystery.weapon === null) {
    return false;
  }

  if (mystery.room === null) {
    return false;
  }

  return true;
};
