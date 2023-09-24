//Function statements a.k.a Function declaration:
// This way of creating a function is called function statement:
function a(){
    console.log("a called");
}

//Function expression:
//Function act like a value. we can initialize a variable with function.

var b=function(){
    console.log("b called through function expression");
}

a();
b();

//Anonymous functions:
//A function without a name
//Anonymous functions are used in places where functions are used as values as in Function expression

var c=function(){
 console.log('c is clled');
}

//Named function expression:

var d=function xyz(){
    console.log(xyz);
}

d();
//xyz(); //Gives error: xyz is not defined.
// Error is due to the fact that xyz is declared as a local variable.
//xyz is not defined in outer(global) scope

//Parameters and Arguments:
//The placeholders/identifiers used in function declaration are called Parameters.
//The actual values passed to the function are called Arguments.
//They are local variables to the function.
var d=function(param1,param2){
    console.log(`param1:${param1} `+`param2:${param2}`);
}
var arg1=3;
var arg2=4;
d(arg1,arg2);

//First class functions a.k.a First class citizens:
/*Ability of functions to be used as values as in giving functions as arguments to another
functions, as return values from a functions, as value to a variable, etc. 
is called First class functions*/

function e(param){
    console.log(param);
    return function(){

    };
}

function abc(){
    console.log("This is abc");
}
var f=e(abc);
console.log(f);


//Arrow functions:


