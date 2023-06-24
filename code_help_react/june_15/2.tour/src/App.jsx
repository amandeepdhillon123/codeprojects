// import React, { useState } from 'react'
//   import data from './data'
//   import Tours from './component/Tours'
// function App() {

//   const[tours,setTours]= useState(data)

//   function removeTour(id)
//   {
//      const newtour= tours.filter( tour => tour.id !== id)
//      setTours(newtour)
//   }

//   if(tours.length === 0)
//       {
//          return (
//               <div className='refresh'>
//                  <h2>No Tours Left</h2>
//                  <button className='btn-white' onClick={()=>  setTours(data)}>Refresh</button>
//                </div>
//           )
//        }

//   return (
//     <div className='App'>
//          <Tours tours={tours} removeTour={removeTour}/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import data from './data'
import Tours from './component/Tours'
function App() {

  const[tours,setTours]=useState(data)

  console.log(tours)

  function removeTour(id)
  {
          const netTour= tours.filter(tour => tour.id !== id)
            
          setTours(netTour)
  }  

  if(tours.length ===  0){

    return(
      <div className='refresh'>
        <h2>No Tours Left </h2>
        <button className='btn-white' onClick={()=>  setTours(data)}>Refresh</button>
      </div>
    )

  }
        
        
  return (
    <div>
   <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App