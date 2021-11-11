// using ES5 Syntax
/*
function getCurrentYear() {
    const year = new Date().getFullYear();

    return "The year is " + year;
}

console.log(getCurrentYear());
*/

// using ES6 Syntax
function getCurrentYear() {
    const year = new Date().getFullYear();

    return `The year is ${year}`;
}

console.log(getCurrentYear());