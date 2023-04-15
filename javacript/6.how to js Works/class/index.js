// 1st     type coercion

// console.log(null)        --> empty object 

// declaration/assignment/reassignment 
  
//   non-primitive values can be change -->mutable

// var arr=[1,2,3]
//     arr[0]="name"
// console.log(arr)
 
//   primitive values can not  be change -->Immutable


//  var st="name";
// st[0]='r'

// console.log(st)



// big information --arrays,object,
// small information -- numbers,string,boolean

// primitive--> it directly points to value -->by value

// non-primitive--> it directly points to address -->by reference


//   var arr =[1,2,3,4]

//   var arr2= arr;

//   arr[0] = 4;

//   console.log(arr)


// data mutability 

// can change -->mutable

// can not change -->Im mutable

let obj={
    name:"aman"

}

Object.freeze(obj);

obj.name="ram";

console.log(obj)


// scope ------------------------------------------------

// local and functional scope

//  block scope 

