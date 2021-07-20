// array de objetos
// criação de uma matriz de carros
var cars = [
  { model: 'Buick', price: 'Cheap' },
  { model: 'Camaro', price: 'Expensive'},
  { model: 'Ferrari', price: 'Very Expensive'}
  /* para adicionar um elemento (objeto) dentro de um array de objetos, define-se propriedades para este objeto, 
     cada uma composta por atributo e valor, e elas são delimitadas entre { }, sendo cada propriedade e 
     cada objeto separados por , */
];

// utilização do helper Map para retornar os MODELOS dos carros contidos na matriz de objetos
var models = cars.map(function(car) {
  return car.model;
});
console.log(models);

// utilização do helper Map para retornar os PREÇOS dos carros contidos na matriz de objetos
var prices = cars.map(function(car) {
  return car.price;
});
console.log(prices);