import React from 'react'

function List() {
    
    
    // const array=["Amandep","Dhillon","email"]
    const array=[{ name:"Amandep", surName:"Dhillon"},
         
    { name:"Amand", surName:"Dhil"}
]
  
    return (
    <>
{
    array.map((item) =>
< >
        <h1>{item.name}</h1>
        <h1>{item.surName}</h1>
</>
    )
}
    
    </>
  )
}

export default List