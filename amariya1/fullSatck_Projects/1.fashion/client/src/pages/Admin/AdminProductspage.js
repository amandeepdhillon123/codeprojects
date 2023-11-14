import React from 'react'
import { Button } from 'react-bootstrap';
const AdminProductspage = () => {
  return (
    <> 
        <section id='sellers'>
        <div class="seller containers">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Products</h2>


                    </div>

                    <div class="best-seller">
                        
                            
                                    <>
                                        <div className="best-p1 mb-5">
                                            <img src="/logo192.png" alt="img" />
                                            <div className="best-p1-txt">
                                                <div className="name-of-p">
                                                    <p>shoes</p>
                                                </div>
                                              
                                                <div className="price">
                                                    $ 5665
                                                    <Button variant='none'> <i class="fa-solid fa-trash" style={{ color: "red" }}></i></Button>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </>
                            

                    </div>
                    {/* <Paginations
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                        page={page}
                        pageCount={pageCount}
                        setPage={setPage}
                    /> */}
                </div>
        </section>

    </>
  )
}

export default AdminProductspage