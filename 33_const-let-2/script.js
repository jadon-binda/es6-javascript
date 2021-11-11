function count(targetString) {
    var characters = ['a', 'e', 'i', 'o', 'u'];
    var number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }
    return number;
}

console.log(count('aeiobzxceiaipbiox'));

// refactoring using const and let

function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    targetString.reduce(function(number, item){
        if (characters.includes(item)) {
            number++;
        }
    }, 0);
    return number;
}

console.log(count('aeiobzxceiaipbiox'));