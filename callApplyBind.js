
//call

var obj={
    num:2
};
var myFunc=function(num1,num2,num3){
    return this.num+num1+num2+num3;
}
var call_var=myFunc.call(obj,1,2,3);
console.log(call_var);

//apply

var arr=[1,2,3];
var apply_var=myFunc.apply(obj,arr);
console.log(apply_var);

//bind

var bound=myFunc.bind(obj); //Bounded to object obj
console.log(bound(1,2,3)) // you just need to pass arguments as it's already bounded to the 
//output: 8