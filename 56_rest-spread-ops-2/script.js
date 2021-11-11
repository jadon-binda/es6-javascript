const defaultColors = ['red', 'green'];
const favoriteColors = ['orange', 'blue'];
const fallColors = ['fire red', 'fall orange'];

// console.log(defaultColors.concat(favoriteColors).concat(fallColors));

// example of Spread Operator
console.log([ ...fallColors, 'brown', ...defaultColors, 'yellow', ...favoriteColors ]);


// example mixing Rest and Spread Operator
function validateShoppingList(...items) { // rest op
  if (items.indexOf('milk') < 0 ) {
    return [ ...items, 'milk' ]; // spread op
  }

  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));