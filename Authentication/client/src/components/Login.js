import React, { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  //   state for toogle hide and show

  const [passShow, setPassShow] = useState(false);

  //   get value from input 

const[inpval, setInpval] = useState({
   
    email:"",
    password:""
    
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
 const loginuser = async(e)=>{
    e.preventDefault();
    
    const{email,password} =inpval;

     if(email === ""){
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
    
     else{
       alert("user login successfully done")

       // alert("user registeration successfully done")
      const data = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         
          email,
          password,
         
        }),
      });
      const resp =  await data.json();
      console.log(resp);

      // if(resp.status === 201){
      //   alert("login successful done")

      //   setInpval({...inpval, email:"",password:""})
      // }
    }
    console.log(inpval);
  
  }

  return (
    <>
      <section>
        {/* upper title  */}
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcomw Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login</p>
          </div>

          {/* form data  */}

          <form>
            {/* login  */}
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={setVal}
                value={inpval.email}
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
                  onChange={setVal}
                  value={inpval.password}
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
            {/* button  */}
            <button className="btn" onClick={loginuser}>Login</button>
            <p>Don't have an Account?  <NavLink to="/register">Sign Up</NavLink> </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
