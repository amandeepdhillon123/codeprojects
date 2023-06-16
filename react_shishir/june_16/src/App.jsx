import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  // const add=(a,b)=>{
  //   const promiseObj= new Promise(function(resolve,reject){

  //     if(a<0 || b< 0)
  //      reject('wrong input')
  //      else
  //      resolve(a+b)
  //   })
  //   return promiseObj;
  // }

  // add(2,3).then((result) => {
  //   console.log(result)
  //   return add(5,6)
  // }).then((result)=>{
  //   console.log(result)
  //   return add(6,7)
  // }).then((result)=>{
  //   console.log(result)
  // })
  // .catch((err)=>{
  //    console.log(err)
  // })
// async  function show(){
           
  // let x= await add(9,3)
  // console.log(x)
  // let y= await add(5,6)
  // console.log(y) 
  // return x, y
  // // try {
  //   let z= await add(-5,6)
  //   console.log(z )
    
  // } catch (error) {
  //    console.log("show error")
  // }
  // try {
  //      let x= await add(9,3)
  // console.log(x)
  // } catch (error) {
  //     console.log(error)
  // }

  // }
  // show().then((p)=>{
  //   console.log(p)
  // }).catch((e)=>{
  //   console.log(e)
  // })

  // show()

    let add=(a,b)=>{

      const promiseObj= new Promise((resolve,reject)=>{
          
        if(a<0 || b<0)
        {
          reject("error")
        }
        else
        resolve(a+b)

      })

      return promiseObj
    }
  //  console.log(add(2,3)) 

  // add(2,3).then((result)=>{
  //   console.log(result)
  //   return add(5,6)
  // }).then((result)=>{
  //   console.log(result)
  //   return add(-2,-3)
  // }).catch((e)=>{
  //   console.log(e)
  // })

  async function show(){
    try {

      let x= await add(2,3)
      console.log(x)
      
    } catch (error) {
        console.log(error)
    }   
  }

console.log(show())




return (
   <>
      <h1>asynch && await </h1>
   </>
  )
}

export default App
