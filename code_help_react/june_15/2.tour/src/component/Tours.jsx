
// import React from 'react'
// import Card from './Card'
// function Tours({tours ,removeTour}) {
//   return (
//     <div className='container'>
//       <div>
//            <h2 className='title'> भारत दर्शन </h2>
//         </div>
//         <div className='cards'>
//       {
//         tours.map((tour)=>{
//            return <Card key={tour.id}  tour={tour} removeTour={removeTour}/>
//         })
//       }
//       </div>
//     </div>
//   )
// }

// export default Tours

import React from 'react'
import Card from './Card'

function Tours({tours,removeTour}) {
  return (
    <div className='container'>
      <div className='title'> <h2> भारत दर्शन </h2>
      </div>

      <div className='cards'>
        {
          tours.map((tour)=>{
             return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
          })
        }
      </div>
    </div>
  )
}

export default Tours