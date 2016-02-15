//Prints "This function is completely hoisted"
foo();
function foo() {
    console.log("This function is completely hoisted");
}


//Throws error because function is called before declaration
try {
    bar();
} catch (err) {
    console.log(err);
}

bar = function () {
    console.log("This function is not hoisted");
};


//Prints the value of x and y
var x = 5;
var y = 5;
console.log("X: " + x + "\nY: " + y);


//Can't print the value of v because variable declarations is not hoisted
var z = 5;
console.log("Z: " + z + "\nV: " + v);
var v = 5;
