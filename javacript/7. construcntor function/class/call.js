


// call --apply --bind 

let kitchen = {
    name:'kitchen',
    purpose:'cook',

    cookFood: function (order){
        console.log(`serving ${order} in ${this.name}` )
    }
};
let living_room = {
    name:'living_room',
    purpose:'rest'
//   doing copy paste ;
    // cookFood: function (order){
    //     console.log(`serving ${order} in ${this.name}` )
    // }
};
let bedrooom= {
    name:'bedrooom',
    purpose:'sleep'
};

// kitchen.cookFood("maggie")
// we have to copied  

        //  -------call
// kitchen.cookFood.call(living_room,"samaosa")


//     applyy
// kitchen.cookFood.apply(living_room,["samaosa","chtni"])

// bind

// let x =kitchen.cookFood.bind(living_room,"chtni")
//   x();

let thor ={
     superpower:'hammer'
}

let captain ={
    superpower:'shield'
}

function Superpower(){

    console.log(`i have ${this.superpower}`)
}

Superpower.call(captain)