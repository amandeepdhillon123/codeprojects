

// const obj ={
//     name:"amandeep", surname:"dhillon"
// };

// obj.name="sahil";

// console.log(obj );

// Object.freeze(obj);

// let array = obj;

//  array.name = "ram";

//  console.log(array)

let array =["aman","deep","jaat"];

Object.freeze(array)

array[0]="krishan";

let ram = array

ram[0]="gyan"

console.log(ram)

console.log(ram)