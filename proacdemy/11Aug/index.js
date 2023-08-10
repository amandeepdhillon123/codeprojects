
// console.log("amandeep")
// console.log(":amnsdfsdkjbf")

const readline = require("readline")
// console.log(readline)dfdf

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("plaese neter your name :",(name)=>{
    console.log("your name os :" + name);
    rl.close();
})

rl.on('close',()=>{
    console.log("inerface is closed");
    process.exit(0);

})