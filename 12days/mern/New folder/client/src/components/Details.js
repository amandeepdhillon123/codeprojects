import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import img from "../assest/profile.jpg"
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Details = () => {
  return (
    <div className='container mt-3'>
            <h1 style={{fontWeight:400}}>Welcome to Amandeep Dhillon</h1>
    
            <Card sx={{ minWidth: 400 }} className='mt-3'>
                    
                    <CardContent>
                        <div className='add_btn'>
                            <button className='btn btn-primary mx-2' title='update'><EditIcon/></button>
                            <button className='btn btn-danger mx-2' title='delete '><DeleteIcon/></button>
                        </div>
                        <div className="row">
                         
                       <div className='left_view col-lg-6 col-md-6 col-12'>
                          <img src={img} style={{width:50}} alt="profile_pic" />
                          <h3 className='mt-3'>Name : <span style={{fontWeight:400}}> amandeep</span></h3>
                          <h3 className='mt-3'>Age : <span style={{fontWeight:400}}> 21 </span></h3>
                          <p className='mt-3'><MailIcon/> Email : <span>amandeep@gmail.com</span></p>
                          <p className='mt-3'><WorkIcon/> Occupation : <span>webdeveloper</span></p>
                       </div>
                       <div className='right_view col-lg-6 col-md-6 col-12'>
                          
                         
                          <p className='mt-4'><PhoneIphoneIcon/> Mobile : <span>234823649</span></p>
                          
                          <p className='mt-3'><LocationOnIcon/> Location: <span> delhi</span></p>
                          <p className='mt-3'> Description: <span>  hii iam amandeep dhillon singh  </span></p>

                       </div>
                       </div>
                    </CardContent>
     
            </Card>
    </div>
  )
}

export default Details