// Funcao para Balancear Parenteses utilizando Reduce

function balancedParens(string) {
    return !string.split('').reduce(function(previous, char) {
        if (previous < 0 ) {
            return previous;
        }
        if (char === '(') {
            previous += 1; // o mesmo que: ++previous; ou previous = previous + 1;
        } if (char === ')') {
            --previous;
        }
        return previous;
    }, 0); 
    // 0, que é o valor inicial, seria uma especie de ponto de equilibrio para a funcao.
    // quando o contador for 0 significa que o parenteses esta equilibrado
    // se a funcao receber um '(' é somado +1 ao contador
    // já se a funcao receber um ')' é somado -1 ao contador    
}

console.log(balancedParens('(((())))'));