/*
MANY, MANY ARGUMENTS

Refactor the following function to use the rest operator.
Remember, an argument using the rest operator does *not* need to be called 'rest'.
*/

/*
// ORIGINAL CODE
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
*/

// REFACTORED CODE
function product(...numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
}

console.log(product(1,2,3,4,5,6,7,8,9,10));