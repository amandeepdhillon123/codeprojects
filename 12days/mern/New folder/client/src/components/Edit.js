import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { updatedata } from './Context/ContextProvider'
const Edit = () => {

  const {updata, setUPdata} =useContext(updatedata)
  const navigate = useNavigate()
    const [inpval,setINP] = useState({
        name:"",
        email:'',
        age:"",
        mobile:"",
        work:"", 
        add:"",
        desc:""   
      })

      // console.log(inpval)
  
  const setData =(e)=>{
      // console.log(e.target.value)
      const {name,value} =e.target;
      setINP((preVal)=>{
          return {
              ...preVal,[name]:value
          }
      })

    }   
        //  get id 
        const {id} = useParams("")
        // console.log(id)
      const Getdata =async() =>{
        const resp = await fetch(`/getuser/${id}`,{
          method:"GET",
          headers:{
             "Content-Type":"application/json"
          },
        });
        
         const data = await resp.json();
        //  console.log("amandeep",data)
         if(resp.status === 500 || !data)
         {
          alert("error in details")
         }
         else{
          setINP(data.data)
         

          // console.log("data")
         }
    }

    useEffect(()=>{
       Getdata()
    },[])
 
    //  update user

    const updateuser = async(e) =>{
      e.preventDefault();
      const {name,email,age,mobile, work, add, desc} = inpval;

      const resp2 =await fetch(`/updateuser/${id}`,{
         method:"PUT",
         headers:{
          "Content-Type" :"application/json"
         },
         body:JSON.stringify({
          name,email,age,mobile, work, add, desc
         })
      })

      const data2 =await resp2.json();
      // console.log(data2)
      if(resp2.status === 500 || !data2){
        alert("fill the data")
      }
      
      else{
        // alert("data added")
        navigate("/")
        setUPdata(data2.data)
        
        
      }

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
          <button type="submit" className="btn btn-primary" onClick={updateuser}>
            Update
          </button>
        </div>
      </form>
    </div>
  
  )
}

export default Edit