'use client'
import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
const page = () => {

  const[color,setCol] = useState('red')
  return (
    <div>
      <h1 className={ color == 'red' ? style.red : style.green}>condtiton with style</h1>
        <h2 style={{backgroundColor:color==='red'? 'red':'green'}}>heading 2</h2> 
        
       <button onClick ={()=> setCol("green")}>update color</button>
    </div>
  )
}

export default page
