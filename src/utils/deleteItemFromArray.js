export function deleteItemFromArray(array, itemID) {
  const itemIndex = array.findIndex(({ id }) => id === itemID);
  return [...array.slice(0, itemIndex), ...array.slice(itemIndex + 1)];
}
