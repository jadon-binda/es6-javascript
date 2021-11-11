const add = function(a, b) {
  return a + b;
}
console.log(add(1,2));


const add2 = (a, b) => { 
  return a + b;
}
console.log(add2(2,2));


const add3 = (a, b) => a + b;
console.log(add3(3,2));


const add4 = function(a, b) {
  const sum =  a + b;
  return sum;
}
console.log(add4(4,2));

const newSum = add(5,5);
console.log(newSum);