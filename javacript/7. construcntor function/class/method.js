

let kitchen = {
    name:'kitchen',
    purpose:'cook',

    cookFood: function (order){
        console.log(`serving ${order} in ${this.name}` )
    }
};
let living_room = {
    name:'living_room',
    purpose:'rest',

    cookFood: function (order){
        console.log(`serving ${order} in ${this.name}` )
    }
};
let bedrooom= {
    name:'bedrooom',
    purpose:'sleep',
     cookFood: function (order){
        console.log(`serving ${order} in ${this.name}` )
    }


};

kitchen.cookFood.call(living_room,'samosa')

