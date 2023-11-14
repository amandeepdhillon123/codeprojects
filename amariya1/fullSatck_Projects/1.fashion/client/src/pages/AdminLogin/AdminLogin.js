import React from 'react'
import { useState } from 'react';
const AdminLogin = () => {
    const [passShow, setPassShow] = useState(false);
  return (
      <>
          <section>
            <div className='form_data'>
                  <div className='form_heading'>
                      <h1>Admin Sign In</h1>
                  </div>

                  <form action="">
                    <div className="form_input">
                         <label htmlFor="">Email</label>
                         <input type="email" name="email" id="email" placeholder='Enter your email address' />
                    </div>

                    {/* passowr   */}
                    <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"}  name="password" o id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                  </form>
            </div>
          </section>
      </>
  )
}

export default AdminLogin