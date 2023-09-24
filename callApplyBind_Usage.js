//call:
//can inherit properties from parent function constructors

let mammal=function(legs){
    this.legs=legs;
};
let cat=function(legs,isDomesticated){
    mammal.call(this,legs);
    this.isDomesticated=isDomesticated;
};
let lion=new cat(4,false);
console.log(lion);

//apply:

let numArray=[1,2,3];
console.log(Math.min(1,2,3))
console.log(Math.min.apply(null,numArray)) //same result

//bind:


let button=function(content){
    this.content=content;
};
button.prototype.click=function(){
    console.log(`${this.content} clicked`);
};
let newButton=new button('add');
let looseButton=newButton.click;
looseButton();
let boundButton=newButton.click.bind(newButton);
boundButton();