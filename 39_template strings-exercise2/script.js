/*
NAME HELPERS

Refactor the function to use template strings.
*/

/* 
// Original code with concatenation instead of template strings

function fullName(firstName, lastName) {
  return firstName + lastName;
}
*/

// Refactored code with Template Strings or Template Literals

const firstName = 'Jadon';
const lastName = 'Binda';

function fullName(firstName, lastName) {
  return `Your name is ${firstName} ${lastName}.`;
}

console.log(fullName(firstName, lastName));