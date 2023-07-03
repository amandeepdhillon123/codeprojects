import React from 'react'
 import { useState } from 'react'
function Fun() {

    const[state,setState] = useState({
        count:0,
        text:''
    })
    function incFun(){
        //  setState(
        //     prevState =>({
        //         ...prevState, count : prevState.count + 1
        //     })
        //  )


        setState({...state, count : state.count + 1})
    }

    function changeHandler(e){
      
        setState({...state, text: e.target.value})

         
    }

    
  return (
    <div>
       <h1>{state.count}</h1>
       <button onClick={incFun}>increment</button>

       <h1>{state.text}</h1>
     <input  type="text" value={state.text} onChange={changeHandler} />
    </div>
  )

}

export default Fun