
const emit = require("events")

let myEmitter = new emit.EventEmitter();

myEmitter.on("userCreate",()=>{
    console.log("user is created ")
})

myEmitter.emit("userCreate")

