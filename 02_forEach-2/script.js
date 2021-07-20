// Exemplo de um método forEach usado para somar valores (elementos) dentro de um array (objeto)

// Create an array of numbers
let numbers = [1, 3, 5, 8, 15];

// Create (and initialize) a variable to hold the sum
let sum = 0;

// Loop over the array, incremeting the sum variable
numbers.forEach(function(number) {  
    sum += number; // o elemento atual do array (number) é adicionado à variável sum
});                                
/*  
    É uma boa prática colocar o nome do array (ou objeto) no plural (numbers) e 
    o nome do elemento recebido como argumento pela função iterativa, ou função interna, no singular (number). 
*/

// Print the sum variable
console.log(sum);


/* 
    É possível também usar o forEach sem uma função anônima, declarando a função iterativa separadamente e 
    passando-a como argumento para o forEach, como no exemplo abaixo:
*/

let numeros = [1, 2, 3, 4, 5];
let soma = 0;

function adder(numero) { // definição da função iterativa separadamente
    soma += numero;
}

numeros.forEach(adder); // a função iterativa é passada como referência para o método forEach

console.log(soma);