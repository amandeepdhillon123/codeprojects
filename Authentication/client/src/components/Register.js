import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  //   state for toogle hide and show

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

//   get value from input 

const[inpval, setInpval] = useState({
    fname:"",
    email:"",
    password:"",
    cpassword:"",
})
    // onchange function 
 const setVal =(e)=>{
    const{name,value } =e.target

    setInpval(()=>{
        return{
            ...inpval,[name]:value
        }
    })
 }


//    validation on button 
   const addUserdata = async(e)=>{
     e.preventDefault();
     
     const{fname,email,password,cpassword} =inpval;

      if(fname ===""){
        alert("plaese enter your name")
      }
      else if(email === ""){
        alert("enter valid email")
      }
      else if(!email.includes*"@")
      {
        alert("enter valid email")
      }
      else if(password.length <6)
      {
         alert("plesae eneter valid password")
      }
      else if(cpassword.length <6)
      {
        alert("plesae enter your cpassword")
      }
      else if(password !== cpassword)
      {
        alert("password and confirm password not match")
      }
      else{
        alert("user registeration successfully done")
      }
      console.log(inpval)
   }

 
  return (
    <>
      <section>
        {/* upper title  */}
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
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
                onChange={setVal}
                value={inpval.fname}
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
                onChange={setVal}
                value={inpval.email}
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
                  onChange={setVal}
                  value={inpval.password}
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
                  onChange={setVal}
                  value={inpval.cpassword}
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
            <button className="btn" onClick={addUserdata}>Sign Up</button>
            <p>
              Already have an account? <NavLink to="/">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
