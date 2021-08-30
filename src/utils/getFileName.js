export function getFileName(name) {
  const today = new Date();
  return `${name}${today.getTime()}`;
}
