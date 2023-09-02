
let a= 10;

let b= 0;
// setTimeout(()=>{
//     b=20
// },2000)

// console.log(a+b)

// let waiting = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve(20)
//     })
// }).then((data)=>{
//       b= data;
//       console.log(a + b)
// }).catch((err)=>{
//     console.log("err aa gya bhai")
// })

let waitin = async function show(a){
    try {

      let b= 20;

     let sum = await (a+ b)

        console.log(sum)
        
    } catch (error) {
           console.log("error aa gya bhai ")
    }
}

waitin(a)

