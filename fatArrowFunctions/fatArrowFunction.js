"use strict";
// var a=6;
// let square=()=>{return a*a};
// console.log(square(4));

let square=(a)=>{return a*a};
console.log(square(9));

let mult=(a,b)=>{return a*b};
console.log(mult(2,4));

//Fat arrow function uses its parent's 'this' object unlike regular functions which have their own instances of 'this'.
//Fat arrow functions don't have 'arguments' variables inside it unlike regular functions. See below:

let myFunc=function(){
    console.log(arguments[0]);
}
myFunc(1,2,3);

// let fatFunc=()=>{
//     console.log(arguments[0]);
// }
// fatFunc(1,2,3);

//solution for this problem: use spread operator '...' introduced in ECMA16:
let fatFunc=(...n)=>{
    console.log(n[0]);
}
fatFunc(1,2,3); //Gives 1