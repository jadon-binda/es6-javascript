var users = [
    { name: 'Jill' },
    { name: 'Bill' },
    { name: 'Jadon', id: 4 },
    { name: 'Alex' },
    { name: 'Jadon' }
]

// usando o loop FOR
var user;
for ( var i = 0; i < users.length; i++) {
    if (users[i].name === 'Jadon') {
        user = users[i];
        break;
    }
}
console.log(user);


// usando o helper FIND
var userSearch = users.find(function(user) {
    return user.name === 'Jill';
});
console.log(userSearch);