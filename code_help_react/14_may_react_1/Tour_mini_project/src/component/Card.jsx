

import React from 'react'
import { useState } from 'react'
const Card = ({id,image,name,info,price,removeTour}) => {

  const [readmore, setReadmore] = useState(false);
  const description= readmore ? info : `${info.substring(0, 200)}....`;
  
  function readmoreHandler(){

    setReadmore(!readmore)
  }

  return (

    // first wrapper 
    <div className='card'>
         <img className="image" src={image} alt={name} />

          {/* 2nd wrapper  */}

         <div className='tour-info'>

           {/* price and name  */}
            <div className='tour-details'>
                  <h4 className='tour-price'>₹ {price}</h4>
                  <h4 className='tour-name'>{name}</h4>
            </div>
               
               {/* description read more show less  */}

            <div className="description">
              {description}
              <span className='read-more' onClick={readmoreHandler}> {readmore ? "Show less" : "Read more"}</span>
             
            </div>
            {/* button not interested */}
            <div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                  Not Interested
            </button>
            </div>





         </div>

    </div>
  )
}

export default Card