import React from 'react'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
const Shipping = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <>
     <section>
                        <div className="form_data">
                            <div className="form_heading">
                                <h1>Shipping Details</h1>
                            </div>
                            <form>
                                <div className="form_input">
                                    <input type="text"  name="mobile" placeholder='Enter Your Mobile' />
                                </div>
                                <div className="form_input mb-3">
                                    <Select option ={options} placeholder="select Your country" />
                                </div>
                                <div className="form_input mb-2">
                                    <Select option ={options}  placeholder="select Your State" />
                                </div>
                                <div className="form_input">
                                    <input type="text" name="city" placeholder='Enter Your city' />
                                </div>
                                <div className="form_input">
                                    <input type="text"  name="pincode"  placeholder='Enter Your pincode' />
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" name='address' v placeholder='Shipping Address' rows={2} />
                                </Form.Group>

                                <button className='btn' >send</button>

                            </form>
                        </div>
                    </section>
    </>
  )
}

export default Shipping