
let a=20;
let b=0;

let wait= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(30)
    })
}).then((data)=>{
    console.log(a+ data)
})
   