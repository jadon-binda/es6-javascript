const square = function(number) {
  return number * number;
}

console.log(square(9));


const square1 = number => number * number;

console.log(square1(11));


const double = (number1, number2) =>   2 * number1 + 2 * number2;

console.log(double(4,5));


const double1 = () => {
  return 2;
};

console.log(double1());


const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(number => number * 2);

console.log(doubleNumbers);


const numbers2 = [4, 5, 6];
/*
const doubledNumber = numbers2.map(function(number2) {
  return number2 * 2;
});
console.log(doubledNumber);
*/

let doubledNumbers = [];
for (i = 0; i < numbers2.length; i++) {
  doubledNumbers.push(numbers2[i] * 2);
}

console.log(doubledNumbers);