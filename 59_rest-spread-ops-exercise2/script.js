/*
SPREADIN' ARRAYS

Refactor the following to use the SPREAD operator.
*/

/*
// ORIGINAL CODE
function join(array1, array2) {
  return array1.concat(array2);
}
*/

// REFACTORED CODE
const array1 = ['Jadon', 'Samuel', 'Binda'];
const array2 = ['Katia', 'Delane', 'Pereira', 'de Barros'];

function join(array1, array2) {
  return [...array1, ...array2];
}

console.log(join(array1, array2));