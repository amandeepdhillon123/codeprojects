import React from 'react'

function Home() {
  return (
    <div>
         <div className='cart'>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="" />
        </div>
        <div className='cart-wrapper'>
            
               <div className='img-wrapper item'>
                    <img src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg" alt="" />   
               </div>
               <div className='text-wrapper item'>
                   <span>
                    i-phone
                   </span>
                   <span>
                   price :$1000
                   </span>
               </div>
               <div className='btn-wrapper item'>
                <button>Add to Cart</button>
               </div>
        </div>
    </div>
  )
}

export default Home