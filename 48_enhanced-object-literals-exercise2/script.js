/*
CONDENSING CODE WITH ENHANCED LITERALS

Refactor the following to use enhance object literal syntax.
*/

// Original Code
/*
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };
*/

// Refactored Code
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

console.log(props);