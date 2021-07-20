let  colors = [ 'red', 'blue', 'green' ]; //criação do array colors e atribuição de alguns valores

/*
** Exemplo do For clássico
for ( let i = 0 ; i < colors.length; i++ ) {
	console.log(colors[i]);
}*/

// Exemplo de utilização do método nativo forEach, em substituição ao loop For acima
colors.forEach (function(color) {
    console.log(color);
});