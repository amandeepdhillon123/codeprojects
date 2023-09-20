// let a= 10;
// b=0;

// setTimeout(()=>{
//     b=20;
//     console.log(a+b)
// },2000)
// console.log(a+b)let

// let a= 10;
// let b=0;

// let waitingData =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })


// waitingData.then((data)=>{
//     b = data;
//     console.log(a + b)
// })
  let a= 20;
  let b= 0
  let waitingData= async function show(){
    try {
         let b= 20;
         let sum = (a + b)
         console.log(sum)
    } catch (error) {
        console.log(error)
    }
  }
 
waitingData()











