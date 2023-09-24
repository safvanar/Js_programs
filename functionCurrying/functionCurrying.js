let multiply=function(x,y){
    console.log(x*y);
}
multiply(3,4);

//Function currying using bind method:
//Make a copy of a function using bind and create new methods out of it.

let multiplyByTwo=multiply.bind(this,2); //2 will be set in place of x. We  have to only pass y.
multiplyByTwo(5);//gives 10

let multiplyByThree=multiply.bind(this,3); //2 will be set in place of x. We  have to only pass y.
multiplyByThree(5);//gives 15

//Function currying using closures:

let multiplyByClosure=function(x){
    return function(y){
        console.log(x*y);
    }
}
//multiplyByClosure(3)(2);//6
let multiplyBy2=multiplyByClosure(2);
multiplyBy2(4);//8
let multiplyBy3=multiplyByClosure(3);
multiplyBy3(7);//21