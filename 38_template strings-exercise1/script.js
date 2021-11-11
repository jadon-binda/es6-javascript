/*
TEMPLATE STRINGS IN PRACTICE

Refactor the function to use template strings.
*/

// Original code with concatenation instead of template strings

/*
function doubleMessage(number) {
    return "Your number doubled is " + (2 * number);
  }
*/

// Refactored code whit Template String or Template Literals

let number = prompt('Enter the number to be doubled: ');

function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
}

console.log(doubleMessage(number));