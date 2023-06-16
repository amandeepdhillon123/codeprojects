import React from 'react'
import { useReducer } from 'react';

  const stateObj={num:5}; 
 const reducer=(state,action)=>{
    // return state + 1
    switch(action.type)
    {
        case 'increment':
            return { num :state.num+1};

            case 'decrement':
                return  { num :state.num-1};

                default:
                   throw new Error();
    }
 }
function Three() {
    const[state,dispatch]=useReducer(reducer,stateObj)

    // function show(){
    //     dispatch( num + 1)
    // }
  return (
    <div>
   <h1> {state.num}</h1>

  <button onClick={()=> dispatch({type:'increment'})}>increment</button>
  <button onClick={()=> dispatch({type:'decrement'})}>decrement</button>  
    </div>
  
  )
}

export default Three