var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];

// solucao usando a funcao callback
var filteredUsers = users.filter(function(user) {
    return user.admin; // retorna os usuarios que sao admin / true
});
console.log(filteredUsers);

// solucao usando a funcao separada
function filteredUsersFunction(user) {
    return !user.admin; // diferente do exemplo acima, retorna os usuarios que nao sao admin / false
}

// o helper Filter apenas recebe como argumento a funcao criada anteriormente
var filteredUsers = users.filter(filteredUsersFunction);
console.log(filteredUsers);