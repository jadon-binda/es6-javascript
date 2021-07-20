var numbers = [1,2,3,5,47,79,154]; // cria um array e preenche com números
var doubledNumbers = []; // cria um array vazio

// solução usando a estrutura de repetição For.
for(i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);  
}
console.log(doubledNumbers);

/* solução usando o helper Map. 
Utiliza-se menos lógica e operadores e o conteúdo da função é bem mais simples que o conteúdo do for. */
var doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);
