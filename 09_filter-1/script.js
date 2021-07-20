// criação de um array com produtos de sacolão
var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' }
];

// criação do array para armazenar os resultados da pesquisa ou filtragem de dados
var filteredProducts = [];

// inicio da logica para filtrar produtos usando o FOR
for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
console.log(filteredProducts);

// inicio da logica para filtrar produtos usando o helper FILTER
filteredProducts = products.filter(function(product) {
  return product.type === 'vegetable'; // boolean statement que produz um valor verdadeiro ou falso
});
console.log(filteredProducts);

/* Tome cuidado ao usar um if para fazer esse tipo de comparação, pois ao invés de termos só um boolean statement
e fazermos apenas uma comparação lógica, vamos ter dois statements e fazer duas comparações.

filteredProducts = products.filter(function(product) {
	if (product.type === 'vegetable') { 
    // essa expressão produz um valor verdadeiro ou falso
		return true; 
    // esse statement também produz um valor booleano (verdadeiro ou falso) igual o de cima, ora, 
    então porque ao invés de usar o if, apenas retornamos o valor booleano obtido da comparação do product.type
    é muito mais prático!
  }
}); 
*/