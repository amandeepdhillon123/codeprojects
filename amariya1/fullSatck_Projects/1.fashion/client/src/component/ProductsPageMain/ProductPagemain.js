import React from 'react'
import Select from 'react-select'
const ProductPagemain = () => {

    const data =[1,2,3,4,5,6,7,8]
    const options = [
        { value: 'All', label: 'All' },
        { value: 'shoes', label: 'Shoes' },
        { value: 'bags', label: 'bags' }
      ]
  return (
    <>
    <section id='sellers'>
    <div className="seller containers">

        {/* filter by category  */}
        <div className='d-flex justify-content-between align-items-center'>
            <h2>Products</h2>
            <div className='category-filter mt-5'>
                {/* <h5>filter By catagory</h5> */}
                <Select options={options} placeholder="filter by category" />
            </div>
        
        </div>
        
          
          <div className="best-seller">
            {
                data.map((ele, index)=>{
                    return (
                        <>
                        <div className="best-p1">
              <img src="/logo192.png" alt="" />
              <div className="best-p1-text">
                <div className="name-of-p">
                  <p>Nike shoes</p>
                </div>
                <div className="price">₹ 500</div>
                <div className="buy-now">
                  <button>
                    <a href="#">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
                        </>
                    )
                })
            }
            
          </div>
        </div>
    
    </section>
    </>
  )
}

export default ProductPagemain