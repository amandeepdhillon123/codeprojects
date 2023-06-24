
// import React, { useState } from "react";

// function Card({ tour, removeTour }) {
   
//   const[readmore,setReadmore]= useState(false)
  // const description= `${tour.info.substr(0,200)}...`
  // const description = readmore ? `${tour.info}` : `${tour.info.substr(0,200)}...` 
  // function readHandler(){
  //     setReadmore(!readmore)
  // }
//   return (
//     <div className='card'>
//       <img  className='image' src={tour.image} alt="" />
//   <div className="tour-info">
//   <div className="tour-details">
//         <h4 className="tour-price">₹ {tour.price}</h4>
//         <h4 className="tour-name">{tour.nam}</h4>
//       </div>

//       <div className='description'>
//         {description}
//         <span className='read-more' onClick={readHandler}>
//           {
//             readmore? `Show Less`: ` Readmore`
//           }
//         </span>
//       </div>
//       <button className='btn-red' onClick={()=> removeTour(tour.id)}>
//         Not Interested
//       </button>
//   </div>
    
//     </div>
//   );
// }

// export default Card;

import React from 'react'
  import { useState } from 'react'
function Card({id,nam,info,image,price,removeTour}){
    const[readmore,setReadmore]=useState(false)
  const description =  readmore ?  info :`${info.substr(0,200)}...`

  function readHandler(){
      setReadmore(!readmore)
  }
  return (
    <div className='card'>
         <img src={image} alt="" className='image'/>
     <div className='tour-info'>
          <div className="tour-info">
              <h4 className="tour-price">₹ {price}</h4>
              <h4 className="tour-name"> {nam}</h4>
          </div>
          <div>
            {description}

            <span className='read-more' onClick={readHandler}>
            {
              readmore ? `show Less` : `read more`
            }
            </span>

            
             

          </div>

          <button className='btn-red' onClick={()=> removeTour(id)}>
            Not interested
          </button >
     </div>
    </div>
  )
}

export default Card