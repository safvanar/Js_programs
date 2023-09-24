class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        return (minMark)=>{
            if(this.marks>minMark&&this.age>minPlacementAge){
                console.log(`${this.name} of age ${this.age} is eligible for placement`)
            }else{
                console.log(`${this.name} of age ${this.age} is not eligible for placement`)
            }
        }
    }
}
const safvan=new Student("Safvan",28,60);
const sajeer=new Student("Sajeer",15,68);
safvan.setPlacementAge(18)(50);