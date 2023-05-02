import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Btn from './Component/Button'

import State from './Component/State'

// import Demo from './Component/Class'

 import Dem from './Component/Props'




function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    {/* <Btn/> */}


  {/* <State/>  */}

    {/* class  */}
    {/* <Demo/> */}
   

  {/* Props  */}

       <Dem  name="amandeep" age= {23} address ={{city:"delhi" , pincode:232432}}/>
       <Dem  name="amandeep" age= {23} address ={{city:"delhi" , pincode:232432}}/>
       <Dem  name="amandeep" age= {23} address ={{city:"delhi" , pincode:232432}}/>
       <Dem  name="amandeep" age= {23} address ={{city:"delhi" , pincode:232432}}/>
  
  
   </>
  )
}

export default App
