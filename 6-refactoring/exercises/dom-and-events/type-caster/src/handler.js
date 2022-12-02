import { typeCaster } from './util.js';

export const castTheValue = (event) => {
  const form = event.target.form;
  const intendedType = form.type.value;
  const stringToCast = form.value.value;

  const casted = typeCaster(stringToCast, intendedType);

  document.getElementById('casted-value').innerHTML =
    typeof casted + ': ' + casted;
};
