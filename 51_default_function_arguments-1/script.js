function makeAjaxRequest(url, method= 'GET') { 
  // o 'method='GET' faz o mesmo que o if abaixo, retorna 'GET' como default, porém com um clean code
  
  /*
  // um if que retorna GET como default
  if (!method) {
    method = 'GET';
  }
  */

  return method;

  // logic to make the request
}

console.log(makeAjaxRequest('google.com', undefined));
/* por convencao usamos 'null' quando nao existe valor a retornar, porem se o usarmos o 'GET' não seria 
associado ao 'method' por default e retornaria null. 
Já se usarmos o 'undefined', o 'GET' seria retornado como default.
*/
console.log(makeAjaxRequest('jksaude.com.br', 'GET'));
console.log(makeAjaxRequest('jksaude.com.br', 'POST'));