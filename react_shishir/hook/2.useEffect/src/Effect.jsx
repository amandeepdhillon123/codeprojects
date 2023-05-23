import React from 'react'
import { useEffect, useState } from 'react'

const Effect = () => {

    const[num,setNum] =useState(0)
    const[num1,setNum1] =useState(5)
    const show = ()=>{
        setNum(num + 1)
    }

    const sho = ()=>{
        setNum(num1 + 1)
    }

    useEffect(()=>{
        console.log(num)

        console.log("component did  update")
    })

    useEffect(()=>{
        console.log(num)

        console.log("component  mount")
    },[num])


    useEffect(()=>{
        return () => {
            console.log("component will  mount")
        }

   
    },[num])
  return (
   <>
   
   <h1>hello</h1>
   <h2>{num}</h2>
   
   <button onClick={show}>update</button>
   <h2>{num1}</h2>
   
   <button onClick={sho}>show</button>
   </>
  )
}

export default Effect