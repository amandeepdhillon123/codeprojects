  
  let kitchen={
    name :"kitchen",
    purpose:"cook",

    cookFood:function(order){
  console.log(`serving ${order} in ${this.name}`)
    }
  };

  let living_room ={
    name:"living room",
    purpose:"watching tv"
  }

  let bedroom ={
    name:"bedroom",
    purpose:"sleep"
  }

//   kitchen.cookFood("maggie")

// kitchen.cookFood.call(living_room,"samosa")

kitchen.cookFood.apply(living_room,["samosa","chtni"])

// let x = kitchen.cookFood.bind(bedroom,"samosa")
// x();

