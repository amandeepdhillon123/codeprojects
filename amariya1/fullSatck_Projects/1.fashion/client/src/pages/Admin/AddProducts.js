import React from 'react'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
const AddProducts = () => {
  return (
    <>
        <div className="container">
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Add Products</h1>
                        </div>

                        <form>
                            <div className="form_input">
                                <input type="text" name="productname"  placeholder='Products Name'/>
                            </div>
                            <div className="form_input">
                            <Select options={categorystate}   placeholder="Product category" />
                            </div>
                            <div className="form_input">
                                <input type="text" name="price"  placeholder='Price'/>
                            </div>
                            <div className="form_input">
                                <input type="text" name="discount"  placeholder='discount'/>
                            </div>
                            <div className="form_input">
                                <input type="file" name="productimage" onChange={handleProductImg}/>
                            </div>
                            <div className="form_input">
                                <input type="text" name="quantity"  placeholder='quantity'/>
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" name='description'   rows={3} />
                            </Form.Group>

                            <button className='btn' >Submit</button>
                        </form>
                    </div>
                </section>
            </div>
    </>
  )
}

export default AddProducts