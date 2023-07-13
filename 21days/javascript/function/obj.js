

// const obj = {
//     car:"black",
//     model:"2022",
//     company:"honda"
// }

// // console.log(obj.car)/\

// obj.color ="red";

// console.log(obj)

// method 

// let obj ={
//     name:function(){
//         console.log("amandeep")
//     }
// }

// obj.name()


// let intro = {
//       name :"amandeep",
//       parichay: function(){
//          return ` my name is ${this.name}`
//       }
// }

// console.log(intro.parichay())

let obj1 ={

    name:"amandeep",
    surName:"Dhillon",

    intro:function(city){
        console.log(`my name is ${this.name} ${this.surName} ${city}`)
    }

}

let obj2 ={

    name:"ama",
    surName:"deep",


}

// obj1.intro.call(obj2,"sringar")

// obj1.intro.apply(obj2,["hghhg"])





