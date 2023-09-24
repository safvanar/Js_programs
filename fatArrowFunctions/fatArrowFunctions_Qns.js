// var fun = a => a

// var a =10;

// console.log(fun(a))


// var fun = a => a

// console.log(fun(a))

// var a =10;


// var fun = a =>{ a }

// var a =10;

// console.log(fun(a))


// var fun =( a, b) =>{

//     var sum = a + b
    
//     return sum
    
//     }
    
//     var a =10;
    
//     var b = 20
    
//     console.log(fun(a, b))


// var fun =( a, b) =>

// var sum = a + b

// return sum

// var a =10;

// var b = 20

// console.log(fun(a, b))



var student = function(name){

  this.name = name;

  function printName() {

    console.log(this.name)

  }

   printName()

}

var yash = new student("yash")