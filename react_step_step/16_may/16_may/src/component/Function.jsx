  import React, { useState } from 'react';
  
  let Fun = ({name,age,address,save})=>{

    const[nam,setName] = useState(name)

    function nameHandler(){
        setName("jjaat")
    }
      
    return(
      <>  

      <h1>{nam}</h1>
     
      <h1>{age}</h1>

      <h1>{address.vp}</h1>
      {/* <h2>{obj}</h2> */}
      <button onClick={nameHandler}>update</button>

      <button onClick={save}>click me</button>




      </>
    )
  }

  export default Fun;