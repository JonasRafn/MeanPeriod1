function Person(n, a) {

    var name = n;
    var age = a;

    this.setAge = function (a) {
        age = a;
    };
    this.setName = function (n) {
        name = n;
    };
    this.getInfo = function () {
        return name + ', ' + age;
    };
}

module.exports = Person;