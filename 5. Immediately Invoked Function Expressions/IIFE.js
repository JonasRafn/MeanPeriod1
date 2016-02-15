//Is only run, with the argument at the end of the function declaration, when the function is called on line 7
var hello = function (name) {
    console.log('Hello ' + name);
    return name;
}('Arne');
console.log(hello);

//Is called immediately, with the argument at  the end of the function declaration, because it is an self invoking function
(function (name) {
    var hello = 'Hello ';
    console.log(hello + name);
}("Niels"));