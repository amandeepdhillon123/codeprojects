'use client'
import React from 'react'
import { Poppins } from 'next/font/google'

const pop =Poppins({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})
// import { useState } from 'react'
// import style from './style.module.css'
const page = () => {

  // const[color,setCol] = useState('red')
  return (
    // <div>
    //   <h1 className={ color == 'red' ? style.red : style.green}>condtiton with style</h1>
    //     <h2 style={{backgroundColor:color==='red'? 'red':'green'}}>heading 2</h2> 
        
    //    <button onClick ={()=> setCol("green")}>update color</button>
    // </div>

    <div>
      <h1>hello</h1>
      <h1 className={pop.className}>hello</h1>
      {/* <h1 style={{fontFamily:"Poppins"}}>heelo</h1> */}
    </div>
  )
}

export default page
