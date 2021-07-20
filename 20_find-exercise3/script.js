function findWhere(array, criteria) {
  // encontra a propriedade do objeto definida como criterio de busca
  var property = Object.keys(criteria)[0];

  return array.find(function(item) {
      // retorna o elemento dentro do array que tem a mesma propriedade definida nos criterios de busca
      return item[property] === criteria[property]; 
    });
}

var ladders = [
  { id: 1, height: '20 feet' },
  { id: 2, height: '15 feet' },
  { id: 3, height: '25 feet' },
  { id: 4, height: '10 feet' },
  { id: 5, height: '25 feet' }
];

console.log(findWhere(ladders, { height: '25 feet' }));