/*
USING DEFAULT ARGUMENTS

Refactor the following code to use default function arguments.
Be sure to remove any unused code after you refactor it.
*/

// Original Code
/*
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}
*/

// Refactored Code
function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1,2));