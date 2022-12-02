import { capSwap } from './util.js';

export const capSwapHandler = () => {
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to cap-swap');
  }

  const capSwapped = capSwap(userInput);
  alert(capSwapped);
};
