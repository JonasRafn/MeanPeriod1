var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

//Userdefined filter

Array.prototype.myFilter = function (callback) {
    if (!callback instanceof Function) throw new TypeError();
    var newArray = [];
    this.forEach(function (element) {
        if (callback(element)) newArray.push(element);
    });
    return newArray;
};

var namesFiltered = names.myFilter(function (name) {
    return name.length <= 3;
});

console.log(namesFiltered);

//Userdefined map

Array.prototype.myMap = function (callback) {
    if (!callback instanceof Function) throw new TypeError();
    var newArray = [];
    this.forEach(function (element) {
        newArray.push(callback(element));
    });
    return newArray;
};

var namesUppercase = names.myMap(function (name) {
    return name.toUpperCase();
});

console.log(namesUppercase);