export function getItemFromArray(array, itemID) {
  return array.find(({ id }) => id === itemID);
}
