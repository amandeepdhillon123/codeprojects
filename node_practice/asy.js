
// asynch
let a=10;
let b=0;





// handle datha by promise 

let waitingData= new Promise((resolve,reject)=>{
    setTimeout(() =>{
       resolve(30)
    },5000);
})

waitingData.then((data) =>{
      b=data;
      console.log(a+b)
})
// console.log(waitingData)

