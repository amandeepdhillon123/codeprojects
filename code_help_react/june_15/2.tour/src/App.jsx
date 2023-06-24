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