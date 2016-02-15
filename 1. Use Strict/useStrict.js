//Use strict declared for global scope
'use strict';

x = 3.14;       //This will cause an error (x is not defined)
var x = 3.14;   //This will not cause an error

myFunction();
function myFunction() {
    y = 3.14;   //This will cause an error (y is not defined)
}

//------------------------------------------------------------
//Use strict declared for local variable/function scope
x = 3.14;       //This will not cause an error

myFunction1();
function myFunction1() {
    'use strict';
    y = 3.14;   //This will cause an error (y is not defined)
}