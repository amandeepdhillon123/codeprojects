// const name =[1,2,3]
// name.push("shyma")
// name.unshift("shyma")
// name.pop("shyma")
// name.shift("shyma")
// // console.log(name)
// // console.log(name.filter((ele)=>{

// // }))

// const array = [1, 2, 3, 4, 5];
// let a = array.indexOf(3);
// console.log(a); 


// const array = [1, 2, 3, 4, 5];

// let c= array.find((num)=>
//     num % 2 === 0
   
// )
// console.log(c)

// let d= array.filter((num) =>{
//     return num % 2 ===0
// })

// console.log(d)



// const array = ["a", "b", "c", "d", "e"];

// let e= array.slice(1,4)

// console.log(e)

// let array1 = [1, 2];
// Using push()
// array1.push(3, 4);
// console.log(array1); 
// Output: [1, 2, 3, 4]
// let array2 = [5, 6];
// // Using concat()
// console.log(array2.concat(7, 8));
// // Output: [5, 6, 7, 8]
// console.log(array2); 
//original array is not modified
// Output: [5, 6] 

// / Using pop()
// let arr1 = [1, 2, 3, 4];
// let popped = arr1.pop();
// console.log(popped); 
// // Output: 4
// console.log(arr1); 
// // Output: [1, 2, 3]
// // Using shift()
// let arr2 = [1, 2, 3, 4];
// let shifted = arr2.shift();
// console.log(shifted); 
// // Output: 1
// console.log(arr2); 
// // Output: [2, 3, 4]

// let letters = ['a', 'b', 'c'];
// letters.splice(1, 0, 'x', 'y');
// console.log(letters); 

// letters.splice(1, 1);
// console.log(letters); 

// letters.splice(2, 1, 'q');
// console.log(letters); 

// let arr =[1,2,3];

// let mapArr = arr.map((e)=> e * 2)
// console.log(mapArr)

// let arr =[1,2,3,4,5];
// let arr2= []
// arr.forEach((e)=> {
//    if(e > 2)
//    {
//     arr2.push(e)
//    }

// })

// console.log(arr2)

//sort the array
// array.sort();
// console.log(array); 
// // Output: [1, 2, 3, 4, 5]
// //reverse the array
// array.reverse();
// console.log(array); 
// // Output: [5, 4, 3, 2, 1]


// const fruits = ['apple', 'banana', 'orange'];
// // Array destructuring
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// // Output
// console.log(firstFruit); // Output: "apple"
// console.log(secondFruit); // Output: "banana"
// console.log(thirdFruit); // Output: "orange"


// const name =["amandeep","ram","shyam"];

// const [name1,name2,name3]= name;
// console.log(name1)

// function sum(){
//     // console.log(arguments)
//     // console.log(arguments.length)

//     console.log(arguments[0])
// }
// sum(1,2,3,4)


// const str = "Hello";
// console.log(str); // Output: Hello
// console.log(str.length); // Output: 5
// console.log(str[0]); // Output: H

let arrayLike = {0:'a', 1:"b", 2:"c",length:3}
// var array1 = Array.from(arrayLike);
// console.log(array1)

// var array2 = [...arrayLike];
// console.log(array2); 


var array3 = Array.prototype.slice.call(arrayLike);
console.log(array3); 









