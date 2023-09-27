import React, { useState } from "react";
import "./mix.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  //    for pass hide and show
  const navigate =useNavigate()
  const [passShow, setPassShow] = useState(false);
  // for confirm
  const [cpassShow, setCPassShow] = useState(false);

  //  for input value

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  console.log(inpval);

  const setVal = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();
    const { fname, email, password, cpassword } = inpval;
    if (fname === "") {
      toast.warning("first name is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else if (cpassword === "") {
      toast.error("confirm password is required!", {
        position: "top-center",
      });
    } else if (cpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== cpassword) {
      toast.error("password  and Confirm password are not matching!", {
        position: "top-center",
      });
    } else {
      // console.log("user registration succesfully done");
      const data = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fname, email, password, cpassword
        })
    });

    const res = await data.json();
    console.log(res.status);

    if (res.status === 200) {
        toast.success("Registration Successfully done 😃!", {
            position: "top-center"
        });
        navigate("/")
        setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
    }
      
    }
  };
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>

          {/* main form data  */}

          <form>
            {/* name */}
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                value={inpval.fname}
                onChange={setVal}
                name="fname"
                id="fname"
                placeholder="Enter Your Name"
              />
            </div>

            {/*  for email */}
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            {/*  for password */}
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={inpval.password}
                  onChange={setVal}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                {/* for hide and shown  */}

                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            {/* for confirm password  */}
            <div className="form_input">
              <label htmlFor="password">confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  // value={inpval.cpassShow}
                  onChange={setVal}
                  value={inpval.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Enter your confirm Password"
                />
                {/* for hide and shown  */}

                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            {/* for login button  */}

            <button className="btn" onClick={addUserdata}>
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/">Log In</NavLink>
            </p>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Register;
