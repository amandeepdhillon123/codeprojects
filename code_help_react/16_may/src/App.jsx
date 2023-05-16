import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Item from './component/Item'
const App =() =>{

 let obj = {

        itemName:"nirma1",
        itemDate:"20",
        itemMonth:"June",
        itemyear:"1998"
 }

  return(
    <div>
     <h1>hello react duniya</h1>

     <Item {...obj}></Item>
    </div>
  )
}

export default App
