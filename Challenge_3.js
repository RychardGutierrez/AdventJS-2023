/*
In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
*/

function findNaughtyStep(original, modified) {
  if (original === modified) {
    return '';
  }

  const iterador = Math.max(original.length, modified.length);
  const originalSize = original.length;
  const modifiedSize = modified.length;
  for (let i = 0; i < iterador; i++) {
    if (original[i] !== modified[i]) {
      return originalSize > modifiedSize ? original[i] : modified[i];
    }
  }
}

const original = 'abcd';
const modified = 'abcde';
const result = findNaughtyStep(original, modified); // 'e'
console.log(result);
