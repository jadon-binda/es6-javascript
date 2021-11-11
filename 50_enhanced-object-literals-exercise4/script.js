/*
REFACTOR TO USE ENHANCED LITERAL NOTATION

Refactor to use enhanced literal notation.
*/

// Original Code
/*
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
*/

// Refactored Code
const color = 'red';

const Car = {
  color,
  drive() {return 'Vroom!'},
  getColor() {return this.color}
}

console.log(Car.drive());
console.log(Car.getColor());