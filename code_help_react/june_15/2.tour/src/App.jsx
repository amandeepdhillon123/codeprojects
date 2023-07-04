// import React, { useState } from 'react'
// import data from './data'
// import Tours from './component/Tours'
// function App() {

//   const[tours,setTours]=useState(data)

//   console.log(tours)

//   function removeTour(id)
//   {
//           const netTour= tours.filter(tour => tour.id !== id)
            
//           setTours(netTour)
//   }  

//   if(tours.length ===  0){

//     return(
//       <div className='refresh'>
//         <h2>No Tours Left </h2>
//         <button className='btn-white' onClick={()=>  setTours(data)}>Refresh</button>
//       </div>
//     )

//   }
// return (
//     <div>
//    <Tours tours={tours} removeTour={removeTour}/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import Tours from './component/Tours'
import Data from './data'

function App() {

  const[data,setData]= useState(Data)
  // console.log(data)

  function removeTour(id){
     let newData = data.filter(dat => dat.id !== id)
  // console.log(newData)
     setData(newData)
  }

  //   if(tours.length ===  0){

//     return(
//       <div className='refresh'>
//         <h2>No Tours Left </h2>
//         <button className='btn-white' onClick={()=>  setTours(data)}>Refresh</button>
//       </div>
//     )

//   }

if(data.length  === 0)
{ return (
  <div className='refresh'>
    <h2>NO Tours Left</h2>
    <button className='btn-white' onClick={()=>setData(Data)}>Refrest</button>
  </div>
  )
}
  return (
    <div>
        <Tours data={data} removeTour={removeTour}/>
    </div>
  )
}

export default App