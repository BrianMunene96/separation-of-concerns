import { list } from './util.js';

export const listHandler = () => {
  const allInputs = [];
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a list item, cancel when your are done');
    if (nextInput !== null) {
      allInputs.push(nextInput);
    } else {
      acceptingInput = false;
    }
  }

  const stringList = list(allInputs);
  const message = `all items:${stringList}`;
  alert(message);
};
