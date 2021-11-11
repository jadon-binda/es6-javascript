/*
MULTIPLE PROPERTIES WITH ENHANCED NO

Refactor to use enhanced literal notation.
*/

// Original Code
/*
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
*/

// Refactored Code
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { 
    red, 
    blue 
};

console.log(COLORS);