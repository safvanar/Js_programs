// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();
//output: 6 6 6 6 6: Because of closure. i is of global scope
//each copy of call back fn refers to same memory location of i.
//Js wait for none. It continue looping when encounter a setTimeout.
//So by the time it completes timeout, i value would be 6.

//solution1: use let. let is of block scope. in each loops, 
//call back fn will form closure with new copies of i
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();
//output: 1 2 3 4 5

//solution3: use a function inside the for loop to pass i and place settimeout inside.
// so each time a seperate copy of i is form closure with inner function. 
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
}
x();

//output: 1 2 3 4 5 