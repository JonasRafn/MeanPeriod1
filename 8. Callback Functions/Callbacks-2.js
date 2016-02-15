var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];


function myFilter(name) {
    if (name.length <= 3) {
        return name;
    }
}

var filtered = names.filter(myFilter);

filtered.forEach(function (name) {
    console.log(name);
});

function myMap(name) {
    var un = name.toUpperCase();
    return un;
}

var uppercase = names.map(myMap);

uppercase.forEach(function (name) {
    console.log(name);
});
