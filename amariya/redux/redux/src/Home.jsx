import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  const disptach = useDispatch();

  const {c} = useSelector( state => state.customReducer)

    const addBtn =()=>{
        disptach({
            type:"increment"
        })
    }
    const add =()=>{
        disptach({
            type:"incrementByValue",
            payload:26
        })
    }
    const subBtn =()=>{
        disptach({
            type:"decrement"
        })
    }
  return (
    <div>
     <h1>{c}</h1>
     <button onClick={addBtn}>increment</button>
     <button onClick={add}>increment  by va;ue</button>
     <button onClick={subBtn}>decrement</button>
    </div>
  )
}

export default Home