
const emit = require("events")

let myEmitter = new emit.EventEmitter();

myEmitter.on("userCreate",(id,name)=>{
    console.log(id , name)
})

myEmitter.emit("userCreate",101 ,"amandeep")

