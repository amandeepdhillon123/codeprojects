import React, { useEffect ,useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useParams} from "react-router-dom"
const Details = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata.data)
  
  const {id} = useParams("")



  const Getdata = async() => {
   
   
    const resp = await fetch(`http://localhost:4000/getuser/${id}`,{
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
    Getdata()
  },[])
  return (


    <div className="container mt-3">
        <h1 style={{ fontWeight: 400 }}>Welcome Bhagat singh</h1>
          
         
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
            <div className="add_btn">
                          <button className="btn btn-primary mx-2"><CreateIcon /></button>
                        <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                    </div>
                  <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmWRcoltmMFdJWOw3_kK7rRchCh_MWCzGH78seP2p&s" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >amandeep</span></h3>
                            <h3 className="mt-3">Age: <span >27</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>aman@gmail.com</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>web</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 387428423842</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>DDelhi</span></p>
                            <p className="mt-3">Description: <span>jasjkdhsjkdfhasjfhj</span></p>
                        </div>
                    </div>
            </CardContent>
          </Card>
    </div>
  )
}

export default Details