import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <div>
        <div className='img-wrapper item'>
            <img src="https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg" alt="" />
        </div>
        <div className='text-wrapper item'>
           <span>
            I-phone
           </span>
           <span>
           Price : $1000.00
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