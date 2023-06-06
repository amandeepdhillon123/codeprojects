
import React from 'react'


import { useState,useEffect } from 'react'
function User(props) {

    useEffect(() =>{
     alert("count wala chl are baba ")
    },[props.count])

    useEffect(() =>{
        alert("data wala chl are baba ")
       },[props.data])
  return (
    <div>
    <h1>count Props : {props.count}</h1>
  <h1> Data props  :   {props.data} </h1>

    </div>
  )
}

export default User