import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
 import Fun from './Fun'

import Condition from './Conditional'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

      {/* conditional  */}
      {/* <Condition name="amandeep" surName="dhillon" verified= {true}/> */}
       

       {/* list */}
       <Fun/>
      
      </>
  )
}

export default App
