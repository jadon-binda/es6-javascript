/*
// Sem Enhanced Object Literals
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
  { title: 'Escravidão', price: 59.90 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Eloquent Javascript'));
*/

// Com Enhanced Object Literals
function createBookShop(inventory) {
  return {
    inventory, 
    /* 
    First: toda vez que houver uma variavel e um valor com o mesmo nome, 
    posso condensá-lo, ou comprimi-lo apenas no próprio nome da variável, ou seja, somente 'inventory'
    */
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
    /*
    Second: se houver uma variavel dentro de uma funcao onde o valor tambem e uma funcao, 
    pode-se omitir tanto o ':' como a keyword 'function'
    */
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
  { title: 'Escravidão', price: 59.90 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Eloquent Javascript'));