
var nam=["aman","ram","shyam","love"]

var result =nam.map(function(ele,index,arr){
  return ele
})

console.log(result[0])



var brand=[{brand:"samasung" ,model:256},{brand:"samasung" ,model:256}]

var mobile= brand.map(function(ele) {
    return ele
})

console.log(mobile[0])


// var num=[2,3,4,5,6]

// let even=num.map(function(ele) {
//     return ele%2==0
// })

// console.log(even)


// filter 


var num=[2,3,4,5,6]

let even=num.filter(function(ele) {
    return ele%2==0
})

console.log(even)


// reduce 

var number=[2,3,4,5,6];

// var acc=0;
let resu=number.reduce(function(acc,ele){
    return acc+ele
},0)
 

console.log(resu)