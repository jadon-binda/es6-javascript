/*
DUMPING UNUSED CODE

Refactor the following code to use default function arguments.
Be sure to remove any unused code after you refactor it.
*/

// Original Code
/*
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
*/

// Refactored Code
function addOffset(style = {}) {
  style.offset = '10px';
  
  return style;
}
console.log(addOffset());