var paints = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' }
];

function pluck(array, property) {
  var newArray = array.map(function(item) {
    return item[property];
  });

  console.log(newArray);

}

pluck(paints, 'color');

/*
var teams = [
  { name: 'Atletico Mineiro' },
  { name: 'Cruzeiro' },
  { name: 'America Mineiro' },
];

function extrair(matriz, propriedade) {
  matriz.forEach(function(item) {
    console.log(item[propriedade]);
  });
}

extrair(teams, 'name');
*/
/*
var paints = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' }
];

function pluck(array, property) {
    array.map(function(item) {
      console.log(item[property]);
  });
}

pluck(paints, 'color');
*/