import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  //   state for toogle hide and show

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  return (
    <>
      <section>
        {/* upper title  */}
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
          </div>

          {/* form data  */}

          <form>
             {/* name  */}
          <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="enter your name"
              />
            </div>
            {/* email  */}
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* password  */}
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={passShow ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="enter your  password"
                />
                {/* toggle  */}
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {passShow ? "hide" : "show"}
                </div>
              </div>
            </div>

            {/* confirm passwor  */}

            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={cpassShow ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="enter your confirm password"
                />
                {/* toggle  */}
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {cpassShow ? "hide" : "show"}
                </div>
              </div>
            </div>
            {/* button  */}
            <button className="btn">Sign Up</button>
            <p>Already have an account? <NavLink to="/">Log In</NavLink></p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
