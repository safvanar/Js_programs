// const name = (arr) => {
//     let index = 0;
  
//     // Return a function that prints "Hello [name]" from the array
//     return () => {
//       if (index < arr.length) {
//         console.log(`Hello ${arr[index]}`);
//         index++;
//       } else {
//         console.log("No more names to greet");
//       }
//     };
//   };
  
//   let fun = name(["Ram", "Shyam"]);
//   fun();
//   fun();


// function y(){


//     setTimeout(() => console.log("a"), 0)
    
//     console.log('Done Coding')
    
    
//     }
    
//     y();


function y(){


    for(let i=1;i<6;i++){
    
    setTimeout(() => console.log(i ), i * 1000)
    
    }
    
    console.log('Done Coding')
    
    
    }
    
    y();