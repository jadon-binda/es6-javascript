// criando um array de numeros
var numbers = [10, 20, 30];

/* execucao usando FOR
var sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
*/

// execucao usando o helper REDUCE
var soma = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log(soma);