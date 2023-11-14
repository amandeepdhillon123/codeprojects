
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
const AddCategory = () => {
  return (
    <>
    <div className="container">
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Add Category</h1>
                </div>

                <form>
                    <div className="form_input">
                        <label htmlFor="category">Category Name</label>
                        <input type="text" name="categoryname"  id="category" />
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name='description'  rows={3} />
                    </Form.Group>

                    <button className='btn'>Submit</button>
                </form>
            </div>
        </section>
    </div>
</>
  )
}

export default AddCategory