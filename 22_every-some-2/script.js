var names = [
    "Alexandria",
    "Matthew",
    "Joe",
    "Jadon"
];

var result1 = names.every(function(name) {
    return name.length > 4 ;
});
console.log(result1);

var result2 = names.some(function(name) {
    return name.length > 4;
});
console.log(result2);