let a=function(b){
    this.b=b;
    let x=()=>{
        console.log(this.b);
    };
    x();
}
a(3);