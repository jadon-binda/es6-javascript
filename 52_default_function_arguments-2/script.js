// funcao construtora para criar um novo usuario, passando como argumento um id
function User(id) {
  this.id = id;
}
//console.log(new User(1));


// funcao para gerar um id aleatorio para o usuario, ao inves de o definirmos manualmente
function generateId() {
  return Math.random() * 999999;
}
//console.log(generateId());


// funcao para criar um usuario administrador com um id aleatorio ou randomico
/* 
desta forma, toda vez que chamar a funcao 'createAdminUser' voce precisa passar como argumento a criacao de 
um novo objeto, que é o novo usuario admin 
*/
function createAdminUser(user) {
  user.admin = true;

  return user;
}
console.log(createAdminUser(new User(generateId())));


/*
porem se utilizarmos o 'default function arguments', já criamos o novo usuario admin dentro da propria funcao
'createAdminUser, passando-o como argumento.
isso traz mais flexibilidade ao codigo, já que podemos apenas transformar um usuario existente em admin.
*/
function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

// criacao do novo usuario com id randomico
const user = new User(generateId());
// transformando o novo usuario em 'admin'
console.log(createAdminUser(user));
// a execucao trará o mesmo resultado de 'function createAdminUser(user)'