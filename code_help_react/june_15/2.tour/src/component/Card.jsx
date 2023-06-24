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