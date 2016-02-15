var Person = require('./personmodule');

var p1 = new Person("Arne", 53);

console.log(p1.name); // Private variable = undefined


var p2 = new Person();
p2.setName('Niels');
p2.setAge(34);

var p2Info = p2.getInfo(); //Uses the personThis object getter to get info

console.log(p2Info);
console.log(p1.getInfo());