

// import React, { useState } from 'react'
// import Tours from './component/Tours'
// import Data from './data'

// function App() {

//   const[data,setData]= useState(Data)
 

//   function removeTour(id){
//      let newData = data.filter(dat => dat.id !== id)
  
//      setData(newData)
//   }

  

// if(data.length  === 0)
// { return (
//   <div className='refresh'>
//     <h2>NO Tours Left</h2>
//     <button className='btn-white' onClick={()=>setData(Data)}>Refrest</button>
//   </div>
//   )
// }
//   return (
//     <div>
//         <Tours data={data} removeTour={removeTour}/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import Data from './data'
import Tours from './component/Tours'
function App() {

  const[tours,setTours] = useState(Data)
   console.log(tours)

   function removeTour(id){
    const newTour =tours.filter(tour => tour.id !== id)
    setTours(newTour)
   }

   if(tours.length === 0)
   {
     return(
         <div className='refresh'>
           <h2>No tours left</h2>
           <buttonn className='btn-white' onClick={()=>setTours(Data)}>refresh</buttonn>

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