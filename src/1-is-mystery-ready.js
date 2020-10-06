export const isMysteryReady = (mystery) => {
  if (mystery == null) {
    return false;
  }

  return Object.values(mystery).every((val) => val !== null);

  // ==ALTERNATIVE==
  // return (
  //   mystery !== null && Object.values(mystery).every((val) => val !== null)
  // );

  // ==ALTERNATIVE==
  // return (
  //   mystery !== null && Object.values(mystery).filter((val) => val).length == 3
  // );

  // ==ALTERNATIVE==
  // return (
  //   mystery !== null &&
  //   mystery.killer !== null &&
  //   mystery.room !== null &&
  //   mystery.weapon != null
  // );

  // ==ALTERNATIVE==
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
};
