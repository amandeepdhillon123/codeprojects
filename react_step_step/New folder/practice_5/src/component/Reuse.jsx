import React from 'react'
import User from './User'
function Reuse() {

    const user=[
        {name:"anil_1", email:"anil@2437", contact :'111'},
        {name:"anil_2", email:"anil@2437", contact :'111'},
        {name:"anil_3", email:"anil@2437", contact :'111'},
        {name:"anil_4", email:"anil@2437", contact :'111'},
    
    ]
  return (
    <div>
        <h1>Resue component with list</h1>
    {
        user.map((item,i) =>
        // <p>{item.name}</p>
        <User item={item.name}/>
        
        )
    }
    
    </div>
  )
}

export default Reuse