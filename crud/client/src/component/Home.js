import React, { useEffect } from "react";
import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";
const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata.data)
    //  console.log(ele.name)

  const getpdata = async(e) => {
    // e.preventDefault();
   
    const resp = await fetch("http://localhost:4000/getdata",{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
        },
       

    });

    const data = await resp.json();
    if (resp.status === 422 || !data) {
      console.log("error ");
      alert("error");

  } else {
    setUserdata(data)
      // history.push("/")
      // setUdata(data)
      // alert("data added")
      console.log(" get Data");

  }
  };

  useEffect(()=>{
    getpdata()
  },[])
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
        <NavLink to="/register" className="btn btn-primary">Add Data</NavLink>  
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">job</th>
              <th scope="col">number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
       
        
        
          { getuserdata.data &&
         getuserdata.data.map((element,id)=>
          
            <>
              <tr>
            <th scope="row">{id + 1}</th>
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>{element.work}</td>
            <td>{element.mobile}</td>
            <td className="d-flex justify-content-between">
            <NavLink to={`view/${element._id}`}>
            <button className="btn btn-success">
               <RemoveRedEyeIcon/>
              </button></NavLink>  
              <button className="btn btn-primary">
               <CreateIcon/>
              </button>
              <button className="btn btn-danger">
               <DeleteOutlineIcon/>
              </button>
            </td>
          </tr>
            </>
          
          
        )

        } 
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
