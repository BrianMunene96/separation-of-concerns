/**
 *
 */
export const list = (array) => {
  let stringList = '';
  for (const input of array) {
    stringList += `\n- ${input}`;
  }
  return stringList;
};
