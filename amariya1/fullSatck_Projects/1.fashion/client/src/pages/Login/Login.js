import React from "react";
import { useState } from "react";
import "./commonsignStyle.scss";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign In</h1>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            {/* button */}
            <button className="btn">Login</button>
            <p>
              Don't have an Account? <NavLink to="/register">Sign Up</NavLink>{" "}
            </p>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Forgot Password <NavLink to="/forgotpassword">Click Here</NavLink>{" "}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
