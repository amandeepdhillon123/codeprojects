import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adddata } from "./Context/ContextProvider";
const Register = () => {

   const{udata,setUdata} = useContext(adddata)
  const navigate= useNavigate()
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  // console.log(inpval);

  const setData = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setINP((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

//    for api calling

           const addinpData = async(e)=>{
            e.preventDefault();

            const {name,email,age,mobile,work,add,desc} =inpval;
         
            // validaton in input fields 
            if(name === ""){
              toast.warning("name is required!")
            }else if(email === ""){
              toast.error("email is required!")
            }else if(!email.includes("@")){
              toast.warning("include @ in your gmail")
            } else if(age ===""){
              toast.warning("age is required!")
            }
            else if(mobile ===""){
              toast.error("mobile no. is required!")
            }
            else if(mobile.length < 10){
              toast.error("mobile no. is required!")
            }
            else if(work === ""){
              toast.error("work is required!")
            }
            else if(add === ""){
              toast.error("address is required!")
            }
            else if(desc === ""){
              toast.error("description is required!")
            }
            else{
              
              const  fetchData = await fetch("/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,age,mobile,work,add,desc

                })
            });

            const finalData = await fetchData.json();
            // console.log(finalData)

            if( fetchData.status === 200)
            {
               toast.success("successful registered")
               navigate("/")
               setUdata(finalData.data)
              
             
            }
            else if( fetchData.status === 500)
            {
               toast.warning("user is already exisy")
            }
            else{
              navigate("/")
            }
            }

               
           }
  return (
    <div className="container">
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
          <button type="submit" className="btn btn-primary" onClick={addinpData}>
            Submit
          </button>
        </div>
      </form>
       <ToastContainer position="top-center" />
    </div>
  );
};

export default Register;
