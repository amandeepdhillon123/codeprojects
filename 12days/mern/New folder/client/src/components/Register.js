import React, { useState } from "react";

const Register = () => {
    const [inpval,setINP] = useState({
          name:"",
          email:'',
          age:"",
          mobile:"",
          work:"", 
          add:"",
          desc:""   
        })

        console.log(inpval)
    
    const setData =(e)=>{
        // console.log(e.target.value)
        const {name,value} =e.target;
        setINP((preVal)=>{
            return {
                ...preVal,[name]:value
            }
        })
      


    }
  return (
    <div>
      <form className="mt-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setData}
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter your name"
            />
          </div>

          {/* email  */}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={setData}
              value={inpval.email}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your email address"
            />
          </div>

          {/* age  */}

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              onChange={setData}
              value={inpval.age}
              name="age"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your age"
            />
          </div>

          {/* mobile */}

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              onChange={setData}
              value={inpval.mobile}
              name="mobile"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* work  */}

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              type="text"
              onChange={setData}
              value={inpval.work}
              name="work"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your work"
            />
          </div>

          {/* address */}

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              onChange={setData}
              value={inpval.add}
              name="add"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your address"
            />
          </div>

          {/* text-area */}
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              className="form-control"
              onChange={setData}
              value={inpval.desc}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
