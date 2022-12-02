/**
 *
 */
export const typeCaster = (input, type) => {
  if (type === 'number') {
    return +input;
  } else if (type === 'string') {
    return input.toString();
  } else if (type === 'boolean') {
    return !!input;
  } else {
    return undefined;
  }
};
