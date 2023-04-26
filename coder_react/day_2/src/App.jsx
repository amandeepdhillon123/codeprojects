import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// import Fun from './component/Fun';

import List from './component/List';
 import obj from './data/data'
function App() {
 
  // let obj=
  return (
    <>
    

      {/* <Fun {...obj}/> */}

      {
        obj.map(ele=>
           
         <List
            key={ele.id}
            id={ele.id}
           name={ele.name}

          
           sur={ele.surName}
           veri={ele.verified} 
         
         ></List>
        
          
           
        )
      }
   
    </>
  )
}

export default App
