/*
ARROW FUNCTIONS AREN'T ALWAYS A SOLUTION

Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.
The code below has a object that represents a users profile. 
The profile has a 'name' currently.
Add another key to this object called 'getName'. 
'getName' should be a function that returns the profiles name, using 'this.name'.
Does the solution work with a fat arrow function or will you have to use a function keyword instead?
*/

/* 
// Original Code
const profile = {
    name: 'Alex'
};
*/

// Refactored Code
/* 
// Tentativa de utilizar o fat arrow function, porém neste caso ela retorna 'undefined'
const profile = {
  name: 'Alex',
  getName: () => this.name,
};
console.log(profile.getName());
*/

// Neste caso, obrigatoriamente devemos usar a 'function' keyword para retornar o nome do perfil
const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};
console.log(profile.getName());