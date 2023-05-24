import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './component/Item'
import ItemDate from './component/ItemDate'
function App() {
  const [count, setCount] = useState(0)
   const obj= [{
    name:"amandeep",
    month:"june",
    date:20,
    year:1994
   },


   {
    name:"amam",
    month:"july",
    date:21,
    year:1998
   }
  
  
  
  ]
  return (
   <div>
     <Item name={obj[0].name} >hello</Item>
     <ItemDate date={obj[0].date}  month={obj[0].month}  year={obj[0].year}></ItemDate>
     
     <Item name={obj[1].name}/>

     <ItemDate date={obj[1].date}  month={obj[1].month}  year={obj[1].year}></ItemDate>

   </div>
  )
}

export default App
