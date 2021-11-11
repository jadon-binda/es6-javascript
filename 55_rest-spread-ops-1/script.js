/*function addNumbers(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
const numbers = [1,2,3,4,5];
console.log(addNumbers(numbers));*/

/*
function addNumbers(a,b,c,d,e) {
  return a + b + c + d + e;
}
const a = 1, b = 2, c = 3, d = 4, e = 5;
console.log(addNumbers(a,b,c,d,e));
*/

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));