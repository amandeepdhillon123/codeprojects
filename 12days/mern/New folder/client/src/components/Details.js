import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import img from "../assest/profile.jpg"
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams ,NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Details = () => {
   
   const [getuserData,setuserData] =useState([]);
   
   console.log(getuserData)
     const {id} = useParams("")
    const navigate =useNavigate();
   //   console.log(id)
   const Getdata =async() =>{
       const resp = await fetch(`/getuser/${id}`,{
         method:"GET",
         headers:{
            "Content-Type":"application/json"
         },
       });
       
        const data = await resp.json();
        if(resp.status === 500 || !data)
        {
         alert("error in details")
        }
        else{
         setuserData(data.data)
        }
   }

   useEffect(()=>{
        Getdata();
   },[])

   //   delete 

const deleteuser = async (id) => {
   const res2 = await fetch(`/deleteuser/${id}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     },
   });

   const deletedata = await res2.json();
   console.log(deletedata);

   if (res2.status === 500 || !deletedata) {
     console.log("error");
   } else {
   //   console.log("user deleted");
   //   setDLTdata(deletedata);
   navigate("/")
     
   }
 };


  return (
    <div className='container mt-3'>
            <h1 style={{fontWeight:400}}>Welcome to {getuserData.name}</h1>
    
            <Card sx={{ minWidth: 400 }} className='mt-3'>
                    
                    <CardContent>
                        <div className='add_btn'>
                          <NavLink to ={`/edit/${getuserData._id}`}><button className='btn btn-primary mx-2' title='update'><EditIcon/></button></NavLink>  
                            <button className='btn btn-danger mx-2' title='delete ' onClick={()=> deleteuser(getuserData._id)}><DeleteIcon/></button>
                        </div>
                        <div className="row">
                         
                       <div className='left_view col-lg-6 col-md-6 col-12'>
                          <img src={img} style={{width:50}} alt="profile_pic" />
                          <h3 className='mt-3'>Name : <span style={{fontWeight:400}}>{getuserData.name}</span></h3>
                          <h3 className='mt-3'>Age : <span style={{fontWeight:400}}>{getuserData.age}</span></h3>
                          <p className='mt-3'><MailIcon/> Email : <span>{getuserData.email}</span></p>
                          <p className='mt-3'><WorkIcon/> Occupation : <span>{getuserData.work}</span></p>
                       </div>
                       <div className='right_view col-lg-6 col-md-6 col-12'>
                          
                         
                          <p className='mt-4'><PhoneIphoneIcon/> Mobile : <span>{getuserData.mobile}</span></p>
                          
                          <p className='mt-3'><LocationOnIcon/> Location: <span> {getuserData.add}</span></p>
                          <p className='mt-3'> Description: <span> {getuserData.desc}</span></p>

                       </div>
                       </div>
                    </CardContent>
     
            </Card>
    </div>
  )
}

export default Details