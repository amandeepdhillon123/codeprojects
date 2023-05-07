
// function Player(n,s){
//     this.name=n;
//     this.surname=s;
// }
     
// var obj =new Player("amandeep",'Dhillon')
// let obj2 = new Player("aman",'Dhillon')

// console.log(obj.name)
// console.log(obj.surname)
// console.log(obj2.name)
// console.log(obj2.surname) 



// method  

let person = {
    name:"rahul",

    
 
  
}

function myName(m,c) {
    this.age=m
    this.city=c
   }




myName.call(person,21,"pune")

// myName.apply(person,[21,"pune"])


// var x= myName.bind(person,21,"pune")

// x()
 
console.log(person)