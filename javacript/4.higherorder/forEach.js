var names=["aman","ram","prateek","shyam"]

// console.log(names)

names.forEach(function(ele,index,array) {
    console.log(ele,index)
})

var num=[1,2,3,4];

// num.forEach(function(ele,index,arr){
   
//     console.log(ele*10)
// })

num.forEach(mul)
function mul(ele,index,arr){
   
    console.log(ele*10)
}
