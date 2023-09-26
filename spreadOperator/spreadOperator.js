// //Spread opearator for Objects:

// const obj1={
//     key1:'value1',
//     key2:'value2'
// }
// const obj2=obj1 //Passing the reference to obj1, not the values in obj1
// obj2.key1='value changed from obj2' //will change value of obj1 also
// console.log(obj1)//print obj1 with changed value

// //solution: spread operator
// const obj3={...obj1}//values are copied, not reference
// console.log(obj3)
// obj3.key2='value changed from obj3'//won't make changes to obj1
// console.log(obj3);
// console.log(obj1);

// const obj4={...obj1,key1:'value changed from obj4'}
// console.log(obj4);

// const obj5={...obj1,key5:'value5'} //Can add new key-value pair
// console.log(obj5);

// //Spread operator for Arrays:
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2] //can do union
// console.log(arr3);
const obj={key1:'value1',key2:'value2'}//values are copied, not reference
obj[key2]='value changed from obj3'
console.log(obj)