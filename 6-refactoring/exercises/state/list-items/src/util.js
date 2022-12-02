/**
 *
 */
export const list = (array, bulletPoint) => {
  let stringList = '';
  for (const input of array) {
    stringList += `\n${bulletPoint} ${input}`;
  }
  return stringList;
};
