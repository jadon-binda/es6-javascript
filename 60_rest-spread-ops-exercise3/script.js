/*
MIXING REST AND SPREAD

Refactor the following to use the only the rest operator.
*/

/*
// ORIGINAL CODE
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

// REFACTORED CODE
const array = ['red', 'blue', 'green'];
//const a = 'yellow', b = 'orange', c = 'brown', d = 'black', e = 'white';

function unshift(array, ...colors) {
  return [ ...colors, ...array ];
}

console.log(unshift(array, 'yellow', 'orange', 'brown', 'black', 'white', 'gray'));