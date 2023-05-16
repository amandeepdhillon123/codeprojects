
let a= 10 ;

let b=0;

let waitingDat = new Promise((resolve,reject)=>{

    setTimeout(() =>{
        b= 30
        resolve(b)
    },2000)
})

waitingDat.then((value) =>{
    console.log(a + value)
})