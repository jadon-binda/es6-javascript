function reject(array, callback) {
    return array.filter(function(item) { 
        return !callback(item);
    });
}

var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function(number) {
    return number > 15;
});

console.log(lessThanFifteen);