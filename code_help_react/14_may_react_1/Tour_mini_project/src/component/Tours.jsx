

import React from 'react'
import Card from './Card'
function Tours({tours, removeTour}) {
  return (
    <div className='container'>
       <div>
          <h2 className="title">भारत दर्शन</h2>
       </div>

       <div className='cards'>
      {
        tours.map((item)=>{
          return <Card {...item}  removeTour={removeTour}></Card>
        })
      }
       </div>
    
    </div>
  )
}

export default Tours