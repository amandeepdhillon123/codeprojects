import React from 'react'
import User from './User'
function Reuse() {

    const users=[
        {name:"anil", email:"anil@gmail.com", contact:'111'},
        {name:"sam", email:"bruce@gmail.com", contact:'222'},
        {name:"peter", email:"peter@gmail.com", contact:'333'},
        {name:"sam", email:"simpke@gmail.com", contact:'444'}
    ]
  return (
    <div>
    <h1>Reuse component</h1>
   
    {
        users.map((item,i)=>
         <h1><User data={item}/ ></h1>
       )
    }

    </div>
  )
}

export default Reuse