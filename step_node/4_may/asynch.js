

// asynchronous function 



console.log(" i am first")

setTimeout(() =>{
    console.log(" i am second")
},2000)

console.log("i am third")

// asu=ynch handle by promises,asynch,awaait

// handle asynchronous data 


let a = 10;



let waiting = new Promise((resolve,reject) =>{

  setTimeout(()=>{
   resolve( 30)
  },2000)

})
waiting.then((data)=>{
    console.log(a + data )
})


console.log(waiting)

console.log(waiting)