import React from 'react'
import { useNavigate } from 'react-router-dom'
function Help() {

    const navigate=useNavigate();

    function handler(){
        navigate('/about')
    }
    function handle(){
        navigate(-1)
    }
  return (
    <div>
        <h1>help page</h1>
        <button onClick={handler}>navigate</button>
        <button onClick={handle}>go abck</button>
    </div>

  )
}

export default Help