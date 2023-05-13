import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './component/Product'
 import Ram from './Ram'
function App() {
  const [count, setCount] = useState(0)
  
  let product ={
    id:"1",
    name:"Amandeep",
    surName:"Dhillon",
    date: new Date()
  }

  function Success(data)
  {
   console.log(data)
  }

  return (
    <div>
   <Product  item={product}/>
   
   <Ram  aman ={Success}/>

    </div>
  )
}

export default App
