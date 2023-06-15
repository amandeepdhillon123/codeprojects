import React from 'react'

function Funevent() {

     function show(e){
        console.log(e.target.value)

     
     }
  return (
    <div>
   <h1>use event in functional compnent</h1>
   <input type="text"  onChange={show}/>
   <button >submit</button>
    </div>
  )
}

export default Funevent