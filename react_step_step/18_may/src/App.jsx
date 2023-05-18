
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useState } from 'react'


//  import Toggle from './Component/Toggle'

// import Form from './Component/Form'

// import Validation from './Component/Validation'
// import Render from './Component/Render'
import Life from './Component/Life'

import Rerender from './Component/Rerender'

  function App(){
    const[name,setName] =React.useState("amand")
    return (
      <>

          {/* <Toggle/> */}
        

        {/* <Form/> */}
        

        {/* <Render/> */}

      {/* //  <Validation/>  */}

      {/* <Life/> */}

      <Rerender name={name}/>
     <button onClick={()=>setName("shidhu")}>update</button>
        </>
    )
  }

export default App
