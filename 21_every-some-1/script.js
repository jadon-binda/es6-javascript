//  definição de uma collection de computadores com suas respectivas memorias ram
//  para rodar um determinado programa é necessário no mínimo 16GB de ram
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 },
    { name: 'Intel', ram: 16 }
];

// variável que indica se TODOS os computadores podem rodar o programa - inicializada com true
var allComputersCanRunProgram = true;

// variável que indica se AO MENOS UM computador pode rodar o programa - inicializada com false
var someComputersCanRunProgram = false;

// lógica usando o FOR
for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        someComputersCanRunProgram = true;
    }
}
console.log(allComputersCanRunProgram);
console.log(someComputersCanRunProgram);

console.log('-----');

// lógica usando o helper EVERY - substitui a variável allComputersCanRunProgram na lógica do For
/*  
o every irá executar o código da função callback em todos os objetos da collection, retornando um valor booleano
true ou false para CADA comparação. 
Depois, ele compara os valores booleanos resultantes com o operador && (and) e retorna um valor booleano final, 
que, será TRUE se TODAS as comparações retornarem TRUE e será FALSE se QUALQUER comparação retornar FALSE 
*/
var result1 = computers.every(function(computer) {
    return computer.ram >= 16;
});
console.log(result1);

// lógica usando o helper SOME - substitui a variável someComputersCanRunProgram na lógica do For
/*  
o some irá executar o código da função callback em todos os objetos da collection, retornando um valor booleano
true ou false em cada comparação. 
Depois, ele compara os valores booleanos resultantes com o operador || (or) e retorna um valor booleano final, 
que, será TRUE se QUALQUER UMA das comparações retornar TRUE e será FALSE se TODAS comparações retornarem FALSE 
*/
var result2 = computers.some(function(computer) {
    return computer.ram > 16;
});
console.log(result2);