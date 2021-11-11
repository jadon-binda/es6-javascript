/*
LITERALS IN FUNCTIONS

Refactor to use enhanced literal notation.
*/

// Original Code
/*
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}
*/

// Refactored Code
const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return { 
      width, 
      height 
    };
  }

console.log(canvasDimensions(400, 300));