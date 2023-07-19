// import React, { useState } from 'react'

// function Card({id,nam,info,price,image,removeTour}) {
//   const[readmore,setReadmore]= useState(false)
//     let description = readmore ? info :`${info.substr(0,200)}...`

//     function readHandler(){
//       setReadmore(!readmore)
//     }
//   return (
//     <div className='card'>
//       <img src={image} alt="" className='image' />
//       <div className='tour-info'>

//         <div className='tour-info'>
//           <h4 className='tour-price'>₹ {price}</h4>
//           <h4 className='tour-name'>{nam}</h4>
//         </div>
//         <div>
//           {description}
//           <span onClick={readHandler} className='read-more'>
//             {
//               readmore ? `show Less` :" read more"
//             }
//           </span>
//         </div>
//         <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button>
//       </div>
//     </div>
//   )
// }

// export default

import React from "react";
import { useState } from "react";
function Card({ id, nam, info, price, image, removeTour }) {
     const[readmore,setReadmore]= useState(false)
  let description =  readmore ? info :`${info.substr(0,200)}...`

  function readHandler(){
    setReadmore(!readmore)
  }
  return (
    <div className="card">
      <img src={image} alt="" className="image" />
      <div className="tour-info">
        <div className="tour-info">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{nam}</h4>
        </div>

        <div>
          {description}
                     <span onClick={readHandler} className='read-more'>
             {
               readmore ? `show Less` :" read more"
             }
           </span>
        </div>
        <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default Card;
