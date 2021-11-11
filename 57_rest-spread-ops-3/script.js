const MathLibrary = {
  // metodo descontinuado
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  
  // novo metodo
  multiply(a, b) {
    return a * b;
  }
};

// mesmo que o metodo antigo tenha sido descontinuado, ainda eh possivel chama-lo
// ele ira dar o resultado com uma mensagem orientando a usar o novo metodo
console.log(MathLibrary.calculateProduct(2,5));

// chamado do novo metodo
console.log(MathLibrary.multiply(12,25));