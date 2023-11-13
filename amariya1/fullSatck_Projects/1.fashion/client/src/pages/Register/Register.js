import React from 'react'
import "../Login/commonsignStyle.scss"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

  return (
    <>
         <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="profile_div text-center">
                        <img src= "/logo192.png" alt="img" style={{ width: "50px" }} />
                    </div>
                    <form>
                        <div className="form_input">
                            <input type="text"  name="firstname"  id="fname" placeholder='Enter Your Name' />
                        </div>

                        <div className="form_input">
                            <input type="text"  name="lastname" id="lastname"  placeholder='Enter Your Last Name' />
                        </div>

                        <div className="form_input">
                            <input type="email"  name="email"  id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <input type="file" name="userprofile"  />
                        </div>

                        <div className="form_input">
                            <div className="two">
                                <input type={!passShow ? "password" : "text"}   name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"}  name="confirmpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' >Sign Up</button>
                        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    </form>
                </div>
            </section>
    </>
  )
}

export default Register