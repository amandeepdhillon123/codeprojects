import React from 'react'
import { useNavigate } from 'react-router-dom';
function Help() {
    const navigate = useNavigate();

    function changeHandler(){
        navigate("/about")
    }
  return (
    <div>
          <h1>I am help page</h1>
          <button onClick={changeHandler}>heloo</button>
    </div>
  )
}

export default Help