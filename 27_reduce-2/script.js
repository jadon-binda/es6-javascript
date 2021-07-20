// criando um array de strings
var primaryColors = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
];

// usando o helper REDUCE para imprimir os valores da propriedade 'color' dentro do array 'primaryColors'
// poderia ser feito usando o helper 'map', como já fizemos anteriormente
var primaryColor = primaryColors.reduce(function(previous/* pode ser tbm 'accumulator' ou 'acc' */, primaryColor) {
    
    previous.push(primaryColor.color); /* adiciona um novo elemento (ou objeto) ao array 'previous', 
                                          que foi passado como argumento para a funcao callback */
    
    return previous; // a cada iteracao, retorna o array 'previous' contendo mais um novo elemento

}, []);
console.log(primaryColor); // ["red", "blue", "yellow"] - imprime a variavel contendo o novo array 'previous'