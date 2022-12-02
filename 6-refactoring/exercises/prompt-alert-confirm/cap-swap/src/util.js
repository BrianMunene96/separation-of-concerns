/**
 *
 */
export const capSwap = (string) => {
  const capSwapped = string
    .split('')
    .map((str) => {
      const charCode = str.charCodeAt(0); // b = 98 r i a n 5
      if (64 < charCode && charCode < 91) {
        return String.fromCharCode(charCode + 32);
      } else if (96 < charCode && charCode < 123) {
        return String.fromCharCode(charCode - 32);
      } else {
        return str;
      }
    })
    .join('');
  return capSwapped;
};
