// import React, { useState } from 'react'

// function Card({tour,removeTour}) {

//  const[readmore,setReadmore]= useState(false)
// const description=`${tour.info.substring(0,200)}....`

//  const description= readmore ? `${tour.info} `:`${tour.info.substring(0,200)}....`

// function readmoreHandler(){
// setReadmore(!readmore)
// }

// return (
//   <div className='card'>
{
  /* image */
}
// <img  className='image' src={tour.image} alt="" />

{
  /* tour-details  */
}

// <div className='tour-info'>
// <div className='tour-details'>
//   <h4 className='tour-price'>₹ {tour.price}</h4>
//    <h4 className='tour-name'>{tour.nam}</h4>
// </div>

{
  /* description  */
}

// <div className='description'>
//          {description}
//          <span className='read-more' onClick={readmoreHandler}>
//           {
//             readmore ? `Show Less` : ` Read More`
//           }
//          </span>
// </div>
// </div>

//     <button onClick={()=>removeTour(tour.id)} className='btn-red'>
//       Not Interested
//     </button>
//     </div>
//   )
// }

// export default Card

import React, { useState } from "react";

function Card({ tour, removeTour }) {
   
  const[readmore,setReadmore]= useState(false)
  // const description= `${tour.info.substr(0,200)}...`
  const description = readmore ? `${tour.info}` : `${tour.info.substr(0,200)}...` 
  function readHandler(){
      setReadmore(!readmore)
  }
  return (
    <div className='card'>
      <img  className='image' src={tour.image} alt="" />
  <div className="tour-info">
  <div className="tour-details">
        <h4 className="tour-price">₹ {tour.price}</h4>
        <h4 className="tour-name">{tour.nam}</h4>
      </div>

      <div className='description'>
        {description}
        <span className='read-more' onClick={readHandler}>
          {
            readmore? `Show Less`: ` Readmore`
          }
        </span>
      </div>
      <button className='btn-red' onClick={()=> removeTour(tour.id)}>
        Not Interested
      </button>
  </div>
    
    </div>
  );
}

export default Card;
