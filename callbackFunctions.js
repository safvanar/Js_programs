//call back functions
//First class functions in jS make this possible.
setTimeout(function (){
    console.log("timer") //function inside the setTimeout function is callback function
},5000);

function x(y){
    console.log("x");
    y()
}
x(function y(){
    console.log("y");
});
