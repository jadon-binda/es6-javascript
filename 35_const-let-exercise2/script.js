/*
CONST/LET REFACTORING

The following code uses 'var' instead of 'const' and 'let'.
Refactor the function to use the new keywords.
Be sure to consider wheter the variable should be declared using 'const' or 'let' depending on wheter
the variable gets reassigned or not.
*/

/*
var statuses = [
    { code: 'OK' , response: 'Request successful'},
    { code: 'FAILED' , response: 'There was an error with your request' },
    { code: 'PENDING' , response: 'Your request is still pending' }
];

var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}

console.log(message);
*/

// Refactoring

const statuses = [
    { code: 'OK' , response: 'Request successful'},
    { code: 'FAILED' , response: 'There was an error with your request' },
    { code: 'PENDING' , response: 'Your request is still pending' }
];

let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}

console.log(message);