import { list } from './util.js';
//import { bulletPoint } from '../data/constants.js';

export const listHandler = () => {
  const allInputs = [];
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a list item');
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
