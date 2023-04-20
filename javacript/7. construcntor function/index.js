
// object literal 
var obj ={
    name:"amandeep"
}

console.log(obj.name)

  

// var person ={
//     name:"john",
//     myNmae: function(){
//         console.log(person.name)
//     }
// }

// person.myNmae();



var person ={
    name:"john",
    myNmae: function(){
        console.log(this.name)
    }
}

person.myNmae();